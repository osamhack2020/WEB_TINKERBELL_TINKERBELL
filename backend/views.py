from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def register(request):
    if request.method == "POST":
        username = request.POST.get('username')
        raw_pw = request.POST.get('password')
        print(username)
        # check if username exists
        if User.objects.filter(username=username).exists():
            print(1)
            return HttpResponse(status=406)
        else:
            User.objects.create_user(username=username, password=raw_pw)
            user = authenticate(username=username, password=raw_pw)
            login(request, user)
            return HttpResponse(status=200)
    else:
        print(3)
        return HttpResponse(status=404)
