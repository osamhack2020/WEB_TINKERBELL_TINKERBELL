from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
import json

# the post request is protected by cors-oprigin-whitelist
# the rquest origin is a React App that passes clean user inputs only
@csrf_exempt
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data["username"]
        password = data["password"]
        # check if username exists
        if User.objects.filter(username=username).exists():
            return JsonResponse({"data":"2"});
        else:
            User.objects.create_user(username=username, password=password)
            return JsonResponse({"data":"1"});
    else:
        return JsonResponse({"data":"3"});

@csrf_exempt
def login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data["username"]
        password = data["password"]
        user = authenticate(username=username, password=password)
        if user is not None:
            return JsonResponse({"data":"1"});
        else:
            return JsonResponse({"data":"2"});
    else:
        return JsonResponse({"data":"3"});
