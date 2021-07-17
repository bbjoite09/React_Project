import './App.css';

import Score from "./Score";
import React from "react";
import Quiz from "./Quiz";
import Start from "./Start";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Heee-on",
            page: "quiz",
            scoreMsg: "이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요 :)",
            list: [
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
                {question: "르탄이는 2살이다.", answer: "O"},
            ],
            ranking: [
                {rank: 1, name: "홍길동", message: "안녕 르탄아!"},
                {rank: 1, name: "홍길동", message: "안녕 르탄아!"},
                {rank: 1, name: "홍길동", message: "안녕 르탄아!"},
                {rank: 1, name: "홍길동", message: "안녕 르탄아!"},
                {rank: 1, name: "홍길동", message: "안녕 르탄아!"},
                {rank: 1, name: "홍길동", message: "안녕 르탄아!"},
                {rank: 1, name: "홍길동", message: "안녕 르탄아!"},
            ],
        };
    }

    render() {
        return (
            <div className="App">
                {/* 조건부 랜더링을 합니다 / state의 page를 바꿔가면서 확인해봐요! */}
                {this.state.page === "quiz" && (<Quiz list={this.state.list}/>)}
                {this.state.page === "start" && (<Start name={this.state.name}/>)}
                {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg}/>)}
            </div>
        );
    }
}

export default App;
