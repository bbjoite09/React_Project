import React from "react";

const Square = (props) => {
    // const [state로 쓸 변수, 바꿔줄 함수] = React.useState(state로 사용하는 변수 초기화);
    const [count, setCount] = React.useState(3);

    console.log("square");
    console.log(count);

    const addSquare = () => {
        setCount(count + 1);
    }
    const removeSquare = () => {
       setCount( (count > 0)? count - 1 : 0);
    }

    const square_count = Array.from({length: count}, (v, i) => (i));
    return (
        <div className="App">
                {square_count.map((num, idx) => {
                    return (
                        <div key={idx}
                             style={{
                                 width: "150px",
                                 height: "150px",
                                 backgroundColor: "#ddd",
                                 margin: "10px",
                             }}
                        >
                            square
                        </div>
                    );
                })}
                <button onClick={addSquare}>하나 추가</button>
                <button onClick={removeSquare}>하나 빼기</button>

            </div>
    )
}

export default Square;