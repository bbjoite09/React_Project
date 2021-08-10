import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

const Progress = (props) =>{
    const bucket_list = useSelector(state => state.bucket.list);

    let count = 0;
    bucket_list.map((l, idx) => {
        if(l.completed){
            count ++;
        }
    })

    return (
        <ProgressBar>
            <HighLight width={(count / bucket_list.length) * 100 + "%"}></HighLight>
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 40px;
`;

const HighLight = styled.div`
    background: pink;
    width: ${props => props.width};
    height: 40px;
    transition: width 1s;
`;


export default Progress;