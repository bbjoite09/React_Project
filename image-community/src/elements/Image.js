import styled from "styled-components";
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}/>
        )
    }
    if(shape === "rectangle"){
        return(
            <AspectOutter>
                <AspectInner {...styles}/>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

Image.defaultProps = {
    sahpe: "circle",
    src: "https://s3.ap-northeast-2.amazonaws.com/yeonii.shop/temp_image.jpg",
    size: 36,
}

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width var(--size);
    height: var(--size);
    border-radius: var(--size);
    
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;


export default Image