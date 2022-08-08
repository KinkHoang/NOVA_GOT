import React from "react";
import styled from "styled-components";

function Card(props) {
    return <Wrapper {...props}>{props.children}</Wrapper>;
}

const Wrapper = styled.article`
    box-shadow: var(--dark-shadow);
    padding: 2rem;
    border-radius: 3px;
    transition: var(--transition);
    &:hover {
        transform: scale(1.01);
    }
`;

export default Card;
