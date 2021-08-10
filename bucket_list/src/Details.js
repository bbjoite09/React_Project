import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteBucket, updateBucket} from "./redux/modules/bucket";
import styled from "styled-components";

const Details = (props) => {
    const dispatch = useDispatch();

    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(props, bucket_list);

    const bucket_index = parseInt(props.match.params.index);

    return (
        <div>
            <BucketName>🔮 {bucket_list[bucket_index].text} 🔮</BucketName>

            <ButtonGroup>
                <Button onClick={() => {
                    props.history.goBack();
                }}> 뒤로가기</Button>
                <Button onClick={() => {
                    dispatch(updateBucket(bucket_index));
                    props.history.goBack();
                }}>완료하기</Button>
                <Button onClick={() => {
                    dispatch(deleteBucket(bucket_index));
                    props.history.goBack();
                }}>삭제하기</Button>
            </ButtonGroup>
        </div>);
};

const BucketName = styled.h1`
  color: #F48FB1;
  text-align: center;
`;

const ButtonGroup = styled.p`
    text-align: center;
`;

const Button = styled.button`
    width : 90px;
    background-color: pink;
    border-radius: 150px;
    padding: 5px 10px;
    margin : 10px;
    border-style: solid;
    border-color: lightgray;
    
`;
export default Details