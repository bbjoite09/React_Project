import React from "react";
// import Grid from "../elements/Grid"
// import Image from "../elements/Image";
// import Text from "../elements/Text";
import {Grid, Image, Text} from "../elements";

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape={"rectangle"} src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "he3on",
        user_profile: "https://s3.ap-northeast-2.amazonaws.com/yeonii.shop/temp_image.jpg",
    },
    image_url: "https://s3.ap-northeast-2.amazonaws.com/yeonii.shop/temp_image.jpg",
    contents: "귀여워요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
}

export default Post;