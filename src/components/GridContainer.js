import styled from "styled-components";

function GridContainer({ children }) {
    return <Wrapper className="grid-container">{children}</Wrapper>;
}

const Wrapper = styled.section`
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    justify-content: center;
    gap: 2rem;
`;

export default GridContainer;
