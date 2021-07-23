import React from "react";

const NotFound = (props) => {
    return (
        <div>
            <h2>주소가 올바르지 않아요😭</h2>
            <button onClick={()=> {
                props.history.goBack();}}>뒤로가기</button>
        </div>
    );
}

export default NotFound;