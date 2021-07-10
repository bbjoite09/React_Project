import React from 'react';


const Start2 = (props) => {
    const name = props.name;
    return (
        <div className="title">
            <div className="outter">
                <h1 style={{fontSize: "30px"}}>나는 <span style={{
                    backgroundColor: "#fdf2f0",
                    padding: "3px 8px",
                    borderRadius: "30px",
                }}>{name}</span>
                    에 대해 얼마나 알고 있을까?
                </h1>
                <input type="text" placeholder="내 이름"
                />
                <button>
                    시작하기
                </button>
            </div>
        </div>

            );
            }


            export default Start2;