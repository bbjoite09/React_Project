import React from "react";
import styled from "styled-components";
import {Text, Grid, Button, Input} from "../elements"


const Login = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>로그인</Text>
                <Grid padding={"16px 0px"}>
                    <Input label="아이디" placeholder="아이디를 입력해주세요"
                           _onChange={() => {
                               console.log("아이디 입력 중")
                           }}></Input>
                </Grid>
                <Grid padding={"16px 0px"}>
                    <Input label="패스워드" placeholder="패스워드를 입력해주세요"
                           _onChange={() => {
                               console.log("패스워드 입력 중")
                           }}></Input>
                </Grid>
            </Grid>

            버튼
        </React.Fragment>
    );
};

export default Login;