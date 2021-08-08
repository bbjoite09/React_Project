import React from "react";
import{useSelector, useDispatch} from "react-redux";

const Details = (props)=>{
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(props, bucket_list);

    const bucket_index = parseInt(props.match.params.index);

    return <h1>{bucket_list[bucket_index]}</h1>;
};

export default Details