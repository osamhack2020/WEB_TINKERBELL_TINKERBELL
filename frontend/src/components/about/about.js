import React from 'react';
import Card from './card';
import '../css/about.css';

function About() {
  return (
      <div class="about">
        <div class="cards">
          <Card class_="card-space card" h1="편리함" p="언제든지 접속해서 팅커벨에게 물어보세요! 언제든지 답할 준비가 되어있습니다"/>
          <Card class_="card-space card" h1="정확도" p="팅커벨은 최적화된 기계학습 알고리즘을 이용하여 정확하게 질문자의 의도를 파악합니다"/>
          <Card class_="card" h1="친근함" p="지루한 근무시간에 잠깐의 말동무가 되어드립니다 팅커벨과 친구가 되어보세요!"/>
        </div>
      </div>
  );
}

export default About;
