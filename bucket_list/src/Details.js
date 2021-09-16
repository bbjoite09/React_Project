import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteBucketFB, updateBucketFB} from "./redux/modules/bucket";
import styled from "styled-components";
import Button from "@material-ui/core/Button"
// import {Button} from "@material-ui/core"
import {ButtonGroup} from "@material-ui/core";


const Details = (props) => {
    const dispatch = useDispatch();

    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(props, bucket_list);

    const bucket_index = parseInt(props.match.params.index);

    return (
        <div>
            <BucketName>🔮<br/><br/>{bucket_list[bucket_index].text}</BucketName>
            <ButtonGroup style={{marginTop: "20px",position: "absolute", left: "50%", transform: "translate(-50%, 0)"}}>
                <Button style={{color: "#7C7877"}} onClick={() => {
                    props.history.goBack();
                }}> 뒤로가기</Button>
                <Button style={{color: "#7C7877"}} onClick={() => {
                    dispatch(updateBucketFB(bucket_index));
                    props.history.goBack();
                }}>완료하기</Button>

                <Button style={{color: "#7C7877"}} onClick={() => {
                    dispatch(deleteBucketFB(bucket_index));
                    props.history.goBack();
                }}>삭제하기</Button>
            </ButtonGroup>
        </div>);
};


const BucketName = styled.h1`
    margin-top:25%;
    color: #7C7877;
    text-align: center;
`;

// const ButtonGroup = styled.p`
//     text-align: center;
// `;
//
// const Button = styled.button`
//     width : 90px;
//     background-color: #F0E5DE;
//     border-radius: 30px;
//     padding: 5px 10px;
//     margin : 10px;
//     border: 3px solid #D9D4CF;
// `;
export default Details