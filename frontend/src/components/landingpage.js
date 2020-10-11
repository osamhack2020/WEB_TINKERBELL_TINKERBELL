import React, { Component } from 'react';
import '../css/landingpage.css';
import image from '../img/chatbot.png';

class Landingpage extends Component {
    render() {
        return (
            <div class="lp">
                <div class="container">
                    <div class="row">
                        <div class="left">
                            <div class="landing-page-title">TinkerBell</div>
                            <p>곤란한 상황에서도 팅커벨은 밤새 여러분과 함께입니다</p>
                            <button>더 알아보기</button>
                        </div>
                        <div class="right">
                            <img class="main-img" src={image}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Landingpage;
