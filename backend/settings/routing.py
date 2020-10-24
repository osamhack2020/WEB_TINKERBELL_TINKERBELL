from channels.routing import ProtocolTypeRouter, URLRouter
import chatting.routing
from .channelsmiddleware import TokenAuthMiddleware

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    "websocket": TokenAuthMiddleware(
        URLRouter(chatting.routing.websocket_urlpatterns)
    )
})
