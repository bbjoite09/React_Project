// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";

const BucketList = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);

    return (
        <ListStyle>
            {bucket_list.map((list, index) => {
                return (
                    <ItemStyle
                        className="list_item"
                        key={index}
                        color={list.completed? "pink" : "#eee"}
                        onClick={() => {
                            props.history.push('/details/' + index)
                        }}>

                        {list.text}
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${props => props.color};
`;

export default BucketList;