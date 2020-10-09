from django.db import close_old_connections
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from jwt import decode as jwt_decode
from django.conf import settings
from django.contrib.auth.models import User
from urllib.parse import parse_qs
from channels.db import database_sync_to_async

@database_sync_to_async
def close_connections():
    close_old_connections()


@database_sync_to_async
def get_user(user_jwt):
    try:
        #  Then token is valid, decode it
        decoded_data = jwt_decode(user_jwt, settings.SECRET_KEY, algorithms=["HS256"])
        return User.objects.get(id=decoded_data["user_id"]);
    except User.DoesNotExist:
        return AnonymousUser()

class TokenAuthMiddleware:
    """
    Custom token auth middleware
    """

    def __init__(self, inner):
        # Store the ASGI application we were passed
        self.inner = inner

    def __call__(self, scope):

        # Close old database connections to prevent usage of timed out connections
        close_connections()

        # Get the token
        token = parse_qs(scope["query_string"].decode("utf8"))["token"][0]

        # Try to authenticate the user
        try:
            # This will automatically validate the token and raise an error if token is invalid
            UntypedToken(token)
        except (InvalidToken, TokenError) as e:
            # Token is invalid
            print(e)
            return None
        else:
            # Get the user using token
            user = get_user(token)
        # Return the inner application directly and let it run everything else
        return self.inner(dict(scope, user=user))
