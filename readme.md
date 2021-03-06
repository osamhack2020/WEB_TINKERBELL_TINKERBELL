

![Logo](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/bg2.png?raw=true)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## 팅커벨
전산실로 오는 하루 평균 전화량은 120통입니다   
그 중 대부분이 사용자가 간단히 해결할 수 있는 문제들이 대부분이었습니다   
하지만 전화대기 인원이 1명이라 사용자들이 전화대기 시간이 계속 길어집니다    
이런 문제들을 해결하기 위해 **『직접』** 개발하고 최적화한 AI모델을 적용한 통신상담 에이전트 팅커벨을 소개합니다   
> **구글 diagflow나 카카오챗봇 빌더 등을 이용하여 챗봇을 만드는 것도 고려해 보았지만 인터넷망 API를 사용하기 때문에 국방망에 도입이 불가능합니다. 따라서 챗봇 프로젝트에는 직접 개발한 AI모델을 사용하는 것이 합리적입니다**


## 시연 영상
###### 이미지를 클릭해주세요
[![Watch the video](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/images/mockup.jpg?raw=true)](https://www.youtube.com/watch?v=U-vWZoQn9eE)

## 팅커벨만의 장점
### 정확한 대답
팅커벨은 질문의 의도를 90%의 정확도로 알아듣습니다   
그래서 AI 가 말을 인식 못해서 몇 번이고 다시 질문할 염려가 없습니다
- [테스트에 사용된 질문들](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/backend/tinkerbell_ai/test_input.csv)
- [테스트 jupyter notebook](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/backend/tinkerbell_ai/tb.ipynb)
### 다양한 활용가능성
팅커벨은 어떤 분야에서도 사용가능합니다   
군 내에서 사용하고 싶은 분야가 있다면 비전공자도 intents.json파일만 수정하여 간편하게 새로운 용도로 재사용 할 수 있습니다
- [intents.json](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/backend/tinkerbell_ai/intents.json)



### 문맥파악 능력
팅커벨은 이전에 했던 말들까지 기억합니다   
이제 질문할 때마다 새로 질문하는 번거로움을 덜어보세요!

![context](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/images/chatting.png?raw=true)

## 기대효과
현재 전산실에 오는 전화 중 간단히 해결할 수 있는 문제가 매우 많습니다   
팅커벨은 이런 문제들을 스스로 해결해 줄 것이며 그에 따른 부가적 기대효과도 발생합니다  
   

- 사용자들의 전산실 의존도가 낮아져 비상시 전화대처자의 대처속도가 높아집니다
- 사용자들이 직접 문제를 해결하게 되는 것은 전군의 전산능력 향상으로 이어져 또 다른 국방력 향상으로 이어집니다

## 기능 설계
![flowchart](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/flowchart.png?raw=true)

## 필수 조건 안내 (Prerequisites)

* Git - [Download & Install Git](https://git-scm.com/download/win)
* Python 3.8 / Pip [Download & Install Python](https://www.python.org/downloads/release/python-386/) 
* NPM [Download & Install Npm](https://nodejs.org/en/download/)

## 기술 스택

Backend | Frontend 
------------ | -------------
[Django](https://www.djangoproject.com/) | [React.js](https://ko.reactjs.org/)
[Keras](https://keras.io/) | [axios](https://github.com/axios/axios)
[Channels](https://channels.readthedocs.io/en/stable/) | [react-mdl](https://www.npmjs.com/package/react-mdl)
[SimpleJWT](https://github.com/SimpleJWT/django-rest-framework-simplejwt)|[mobx](https://mobx.js.org/README.html)

## 설치 권장사항
- Pycurl >=	7.43.0.5
- Twisted >= 20.3.0

## 설치 안내 (Installation)
```bash
$ git clone https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL.git
$ cd WEB_TINKERBELL_TINKERBELL
$ cd backend
$ pip install -r requirements.txt
$ cd ..
$ cd frontend
$ npm install
```



## 프로젝트 사용법 (Getting Started)
### 백엔드 Django서버 실행 
WEB_TINKERBELL_TINKERBELL폴더로 이동후 아래 커맨드를 이용하여 서버를 실행시킵니다. 이때 서버는 8000포트를 이용하게 됩니다. 
```bash
$ cd WEB_TINKERBELL_TINKERBELL
$ cd backend
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver
```

### 프론트엔드 React서버 실행 
WEB_TINKERBELL_TINKERBELL내의 frontend폴더로 이동한후 아래 커맨드를 이용하여 서버를 실행시킵니다. 이때 서버는 3000포트를 이용하게 됩니다. 
```bash
$ cd frontend
$ npm start
```

 
## 팀 정보 (Team Information)
- 문재현 (mjh4ram@gmail.com), Github Id: mjh4ram
- 양영환 (15eksakf@gmail.com), Github Id: 15div

## 저작권 및 사용권 정보 (Copyleft / End User License)
* [MIT](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/LICENSE.txt)
