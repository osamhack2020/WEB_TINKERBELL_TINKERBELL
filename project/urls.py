"""tinkerbell URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from backend import views
from authentication import views as views_1
from rest_framework_simplejwt import views as jwt_views
from authentication.views import ObtainTokenPairView, CustomUserCreate


urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', views.register),
    path('signin/', views.login),
    path('api/user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('api/token/obtain/', ObtainTokenPairView.as_view(), name='token_create'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
