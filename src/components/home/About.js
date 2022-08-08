import React from "react";
import styled from "styled-components";
import AboutImg from "../../images/about-banner.webp";

function About() {
    return (
        <Wrapper className="section">
            <div className="section-center">
                <div className="title">
                    <h3 className="heading">About Nova GOT</h3>
                    <div className="underline"></div>
                </div>
                <div className="about-content">
                    <div className="img">
                        <img src={`${AboutImg}`} alt="" />
                    </div>
                    <div className="data">
                        <p>
                            Game of Thrones is an American fantasy drama
                            television series created by David Benioff and D. B.
                            Weiss for HBO. It is an adaptation of A Song of Ice
                            and Fire, a series of fantasy novels by George R. R.
                            Martin, the first of which is A Game of Thrones. The
                            show was shot in the United Kingdom, Canada,
                            Croatia, Iceland, Malta, Morocco, and Spain. It
                            premiered on HBO in the United States on April 17,
                            2011, and concluded on May 19, 2019, with 73
                            episodes broadcast over eight seasons.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    .section-center {
        .title {
            text-align: center;
        }
    }
    .about-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 2rem;
        margin-top: 3rem;
        img {
            width: 100%;
        }
        @media (max-width: 576px) {
            grid-template-columns: 1fr;
        }
    }
`;
export default About;
