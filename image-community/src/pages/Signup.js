import React from "react";
import {Text, Grid, Button, Input} from "../elements"

const Signup = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>회원가입</Text>

                <Grid padding="16px 0px">
                    <Input label="아이디" placeholder="아이디를 입력하세요."
                           _onChange={() => {
                               console.log('회원가입 - 아이디')
                           }}/>
                </Grid>
                <Grid padding="16px 0px">
                    <Input label="닉네임" placeholder="닉네임을 입력하세요."
                           _onChange={() => {
                               console.log('회원가입 - 닉네임')
                           }}/>
                </Grid>
                <Grid padding="16px 0px">
                    <Input label="비밀번호" placeholder="비밀번호를 입력하세요."
                           _onChange={() => {
                               console.log('회원가입 - 비밀번호')
                           }}/>
                </Grid>
                <Grid padding="16px 0px">
                    <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력하세요."
                           _onChange={() => {
                               console.log('회원가입 - 비밀번호 확인')
                           }}/>
                </Grid>
                <Button text="회원가입하기"/>
            </Grid>
        </React.Fragment>
    );
};

Signup.defaultProps = {};

export default Signup;