from channels.consumer import AsyncConsumer
from channels.exceptions import StopConsumer
from tensorflow import keras
from .msg_processor import MsgProcessor
import json
import random
import numpy
# from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(AsyncConsumer):
    """
    Base WebSocket consumer, async version. Provides a general encapsulation
    for the WebSocket handling model that other applications can build on.
    """

    groups = None

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.groups is None:
            self.groups = []

    async def websocket_connect(self, message):
        """
        Called when a WebSocket connection is opened.
        """
        try:
            for group in self.groups:
                await self.channel_layer.group_add(group, self.channel_name)
        except AttributeError:
            raise InvalidChannelLayerError(
                "BACKEND is unconfigured or doesn't support groups"
            )
        try:
            await self.connect()
        except AcceptConnection:
            await self.accept()
        except DenyConnection:
            await self.close()

    async def connect(self):
        await self.accept()
        answer_list = ["충성! 수고하십니다.", "안녕하세요", "안녕하십니까!"]
        await self.send(json.dumps({"context": "0", "msg": random.choice(answer_list)}))




    async def accept(self, subprotocol=None):
        """
        Accepts an incoming socket
        """
        await super().send({"type": "websocket.accept", "subprotocol": subprotocol})

    async def websocket_receive(self, message):
        """
        Called when a WebSocket frame is received. Decodes it and passes it
        to receive().
        """
        if "text" in message:
            await self.receive(text_data=message["text"])
        else:
            await self.receive(bytes_data=message["bytes"])

    async def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)
        msg = data["msg"]
        context = int(data["context"])
        step = int(data["step"])

        # keras model 로드
        tinkerbell = keras.models.load_model('./tinkerbell_ai')
        msg_processor = MsgProcessor(-1, context, step)
        # msg 프로세스
        msg = msg_processor.prep_message(msg)
        output = tinkerbell.predict(msg)
        index = -1
        if numpy.amax(output) >= 0.95:
            index = numpy.argmax(output)
        msg_processor.index = index
        data = msg_processor.get_messasge()

        await self.send(json.dumps(data))

    async def send(self, text_data=None, bytes_data=None, close=False):
        """
        Sends a reply back down the WebSocket
        """
        if text_data is not None:
            await super().send({"type": "websocket.send", "text": text_data})
        elif bytes_data is not None:
            await super().send({"type": "websocket.send", "bytes": bytes_data})
        else:
            raise ValueError("You must pass one of bytes_data or text_data")
        if close:
            await self.close(close)

    async def close(self, code=None):
        """
        Closes the WebSocket from the server end
        """
        if code is not None and code is not True:
            await super().send({"type": "websocket.close", "code": code})
        else:
            await super().send({"type": "websocket.close"})

    async def websocket_disconnect(self, message):
        """
        Called when a WebSocket connection is closed. Base level so you don't
        need to call super() all the time.
        """
        try:
            for group in self.groups:
                await self.channel_layer.group_discard(group, self.channel_name)
        except AttributeError:
            raise InvalidChannelLayerError(
                "BACKEND is unconfigured or doesn't support groups"
            )
        await self.disconnect(message["code"])
        raise StopConsumer()

    async def disconnect(self, code):
        """
        Called when a WebSocket connection is closed.
        """
        pass
