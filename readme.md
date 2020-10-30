

![Logo](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/bg2.png?raw=true)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## 팅커벨
전산실로 오는 하루 평균 전화량은 120통입니다.   
그 중 대부분이 사용자가 간단히 해결할 수 있는 문제들이 대부분이었습니다.   
하지만 전화대기 인원이 1명이라 사용자들이 전화를 기다리는 시간은 계속 길어져만 가게됩니다.   
또 이런 전화들이 계속 온다면 진짜 긴박한 상황에 대처가 늦어질 위험성이 있습니다.   
이런 문제들을 해결 하기 위해 개발한 군내 통신 장애 상담형 AI 에이전트, 팅커벨을 소개합니다.   



## 시연 영상

[![Watch the video](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/images/mockup.jpg?raw=true)](https://www.youtube.com/watch?v=U-vWZoQn9eE)

## 팅커벨만의 장점
### 정확한 대답
팅커벨은 질문의 의도를 90%의 정확도로 알아듣기 때문에 AI 가 말을 인식 못해서 몇 번이고 다시 질문할 염려가 없습니다

## 기능 설계
![flowchart](https://github.com/osamhack2020/WEB_TINKERBELL_TINKERBELL/blob/main/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/flowchart.png?raw=true)

## 필수 조건 안내 (Prerequisites)

* Git - [Download & Install Git](https://git-scm.com/download/win)
* Python 3.8 / Pip [Download & Install Python](https://www.python.org/downloads/release/python-386/) 
* NPM [Download & Install Npm](https://nodejs.org/en/download/)

## 기술 스택

### Server(back-end)
 -  [Django](https://www.djangoproject.com/)
 -  [Keras](https://keras.io/)
 -  [Channels](https://channels.readthedocs.io/en/stable/)
 
### front-end
 -  [React.js](https://ko.reactjs.org/)
 -  [axios](https://github.com/axios/axios)
 -  [react-mdl](https://www.npmjs.com/package/react-mdl)
 -  [mobx](https://mobx.js.org/README.html)

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
