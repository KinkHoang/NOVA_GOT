import React from "react";
import styled from "styled-components";
import Banner from "../../images/banner.jpg";
function Hero() {
    return (
        <Wrapper
            style={{ backgroundImage: `url(${Banner})` }}
            className="section hero-section"
        ></Wrapper>
    );
}

const Wrapper = styled.section`
    margin-top: 0;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export default Hero;
