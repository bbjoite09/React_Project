import React from "react";
import styled from "styled-components";
import {Eco} from "@material-ui/icons"

const Spinner = (props) => {
    return(
        <Outter>
            <Eco style={{fontSize: "150px", color: "#ABD0CE"}}/>
        </Outter>
    )
}

const Outter = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dddddd
`;

export default Spinner;