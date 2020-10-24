import React from 'react';


const Card = (props) => {
    return (
      <div class={props.class_}>
        <svg width="73px" height="60px" viewBox="0 0 73 60" version="1.1">
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Group-5" transform="translate(-49.000000, -69.000000)" stroke="#470166" stroke-width="1.5">
                    <g id="30">
                        <g transform="translate(50.000000, 70.000000)">
                            <rect id="Rectangle" x="0.449367089" y="0.453125" width="69.8496203" height="51.3209375"></rect>
                            <polyline id="Path" points="46.0241772 43.2915625 59.7029114 29.4984375 46.0241772 15.7053125"></polyline>
                            <polyline id="Path" points="24.7151899 15.7053125 11.0364557 29.4984375 24.7151899 43.2915625"></polyline>
                            <path d="M39.9397468,6.5975 L30.9434177,51.7740625" id="Path"></path>
                            <rect id="Rectangle" x="0.449367089" y="6.5975" width="69.8496203" height="51.3209375"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
        <div class="learn-more">Learn More </div>
      </div>
    )
}

export default Card;
