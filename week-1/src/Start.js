import React from 'react';


const Start = (props) => {
    const name = props.name;
    const titleStyle = {
        display: "flex",
        height: "100vh",
        width: "90vw",
        overflow: "hidden",
        padding: "10px",
        boxSizing: "border-box",
    };
    const outterStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
        padding: "0px 10vw",
        boxSizing: "border-box",
        maxWidth: "680px"
    };
    const inputStyle = {
        padding: "10px",
        margin: "24px 0px",
        border: "1px solid #f8dae2",
        borderRadius: "30px",
        width: "100%"
    };
    const buttonStyle = {
        padding: "10px",
        margin: "24px 0px",
        border: "1px solid #f8dae2",
        borderRadius: '30px',
        width: '100px',
        alignItems: 'center',
        backgroundColor: '#fdf2f0',
    };
    return (
        <div style={titleStyle}>
            <div style={outterStyle}>
                <h1 style={{fontSize: "30px"}}>나는 <span style={{
                    backgroundColor: "#fdf2f0",
                    padding: "3px 8px",
                    borderRadius: "30px",
                }}>{name}</span>
                    에 대해 얼마나 알고 있을까?
                </h1>
                <input type="text" placeholder="내 이름" style={inputStyle}
                />
                <button style={buttonStyle}>
                    시작하기
                </button>
            </div>
        </div>

    );
}


export default Start;