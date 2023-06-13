import React from "react";

// 컴포넌트
// 컴포넌트 파일은 대문자로 작성하는 것이 관례입니다.
function SayHello(props) {
    return (
        <div>
            <p>404</p>
            {props.children}
            <span>405</span>
            <p>500</p>
            <p>Null</p>
            <p>NaN</p>            
        </div>
    );
}

export default SayHello;
