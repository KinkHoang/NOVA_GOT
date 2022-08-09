import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Explore() {
    return (
        <Wrapper className="section">
            <div className="section-center">
                <div className="title">
                    <h3 className="heading">Explore</h3>
                    <div className="underline"> </div>
                </div>
                <div className="explore-cards-container">
                    <div className="card character">
                        <img
                            src="https://i.im.ge/2022/08/01/FtoRX8.0b144417-0c71-4c29-950e-2bc3c954f3e8-1-ec4aaa5ed6cced66399a52c65aa3f710.jpg"
                            alt="character"
                        />
                        <div className="data">
                            <h4 className="gutter-botton">Charaters</h4>
                            <p>Get all the Characters details</p>
                            <Link
                                to={"/characters"}
                                className="btn btn-primary btn-primary-sm"
                            >
                                see more
                            </Link>
                        </div>
                    </div>
                    <div className="card books">
                        <img
                            src="https://i.pinimg.com/originals/6a/49/93/6a49939fed4981b569923d79f314771e.jpg"
                            alt="books"
                        />
                        <div className="data">
                            <h4 className="gutter-botton">Books</h4>
                            <p>Get all the Books details of GOT</p>
                            <Link
                                to={"/books"}
                                className="btn btn-primary btn-primary-sm"
                            >
                                see more
                            </Link>
                        </div>
                    </div>

                    <div className="card houses">
                        <img
                            src="https://www.pngitem.com/pimgs/m/455-4550544_game-of-thrones-houses-m-hd-png-download.png"
                            alt="houses"
                        />
                        <div className="data">
                            <h4 className="gutter-botton">Houses</h4>
                            <p>Get all the Houses details of GOT</p>
                            <Link
                                to={"/houses"}
                                className="btn btn-primary btn-primary-sm"
                            >
                                see more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    .explore-cards-container {
        width: 100%;
        margin-top: 2rem;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
        justify-items: center;
        .card {
            box-shadow: var(--dark-shadow);
            width: 270px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            img {
                width: 100%;
                height: 200px;
                border-top-right-radius: 3px;
                border-top-left-radius: 3px;
            }
            .data {
                padding: 1rem;
            }
        }
    }
`;

export default Explore;
