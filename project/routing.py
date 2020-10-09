from channels.routing import ProtocolTypeRouter, URLRouter
import backend.routing
from .channelsmiddleware import TokenAuthMiddleware

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    "websocket": TokenAuthMiddleware(
        URLRouter(backend.routing.websocket_urlpatterns)
    )
})
