import React from "react";
import styled from "styled-components";
import {Text, Grid, Button, Input} from "../elements"


const Login = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>로그인</Text>
                <Grid padding={"16px 0px"}>
                    <Input label="아이디" placeholder="아이디를 입력하세요"
                           _onChange={() => {
                               console.log("아이디 입력 중")
                           }}></Input>
                </Grid>
                <Grid padding={"16px 0px"}>
                    <Input label="비밀번호" placeholder="비밀번호를 입력하세요"
                           _onChange={() => {
                               console.log("패스워드 입력 중")
                           }}></Input>
                </Grid>
                <Button text="로그인하기" _onClick={() => {
                    console.log("로그인 완료!");
                }}></Button>
            </Grid>

        </React.Fragment>
    );
};

export default Login;