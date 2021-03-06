import React from "react";

import {withRouter} from "react-router";
import {Route, Switch} from "react-router-dom";

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import Details from "./Details";
import NotFound from "./NotFound";
import Progress from "./Progress";

// 리덕스 스토어와 연결하기 위해 connect라는 호출
import {connect} from 'react-redux';
// 리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 가져오기
import {loadBucketFB, addBucketFB, deleteBucketFB} from './redux/modules/bucket';

import {firestore} from "./firebase";

import Spinner from "./Spinner";

// 스토어가 가진 상태값을 props로 받아오기 위한 함수
const mapStateTopProps = (state) => ({
    bucket_list: state.bucket.list,
    is_loaded: state.bucket.is_loaded,
});

// 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수
const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(loadBucketFB());
        },
        create: (bucket) => {
            dispatch(addBucketFB(bucket));
        }
    }

};

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
    constructor(props) {
        super(props);
        // App 컴포넌트의 state를 정의해줍니다.
        this.state = {};
        // ref는 이렇게 선언합니다!
        this.text = React.createRef();
    }

    componentDidMount() {
        this.props.load();
    }

    addBucketList = () => {
        const new_item = this.text.current.value;
        this.props.create(new_item);
    };

    // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
    render() {
        return (
            <div className="App">
                {!this.props.is_loaded ? (<Spinner/>) : (
                    <React.Fragment>
                        <Container>
                            <Title>내 버킷리스트</Title>
                            <Progress/>
                            <Line/>
                            {/* 컴포넌트를 넣어줍니다. */}
                            {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
                            {/* Route 쓰는 법 2가지를 모두 써봅시다! */}
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    render={(props) => (
                                        <BucketList
                                            list={this.props.bucket_list}
                                            history={this.props.history}
                                        />
                                    )}
                                />
                                <Route path="/details/:index" component={Details}/>
                                <Route
                                    render={(props) => <NotFound history={this.props.history}/>}
                                />
                            </Switch>
                        </Container>
                        {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
                        <Input>
                            <input type="text" ref={this.text}/>
                            <button onClick={this.addBucketList}>추가하기</button>
                        </Input>
                    </React.Fragment>
                )}
            </div>
        );
    }
}


const Input = styled.div`
    max-width: 350px;
    min-height: 10vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    $ * {
        padding : 6px;
    }
    & input {
        width: 65%;
        &: focus{
            border: 5px solid #F0E5DE;
        }
    }
    & button {
        width : 90px;
        background-color: #F0E5DE;
        border-radius: 30px;
        padding: 5px 10px;
        margin : 10px;
        border: 3px solid #D9D4CF;
    }
`;

const Container = styled.div`
    max-width: 350px;
    min-height: 60vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Title = styled.h1`
    color: #7C7877;
    text-align: center;
`;

const Line = styled.hr`
    margin: 16px 0px;
    border: 1px dotted #ddd;
`;

const Button = styled.button`
    
    
`;

// withRouter 적용
// connect로 묶어줬습니다!
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));