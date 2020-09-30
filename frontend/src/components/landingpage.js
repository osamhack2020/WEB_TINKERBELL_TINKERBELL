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
                            <p>코카콜라 맛있어 맛있으면 또먹지 척척박사님 알아맞춰보세요</p> 
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