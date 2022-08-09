import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavLink, useMatch } from "react-router-dom";

function Navbar() {

    const [isToggle, setIsToggle] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const match = useMatch("/");


    const linksRef = useRef(null);
    const linksContainerRef = useRef(null);

    if (match?.pathname === "/") {
        window.onscroll = function () {
            scrollFunction();
        };
    }

    function scrollFunction() {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    }

    useEffect(() => {
        const height = linksRef.current.getBoundingClientRect().height;

        if (isToggle) {
            linksContainerRef.current.style.height = `${height}px`;
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [isToggle]);
    return (
        <Wrapper className="navbar">
            <div
                className={`navbar-center ${
                    isScrolling ? "normal" : "tranparent"
                } ${!match && "normal"}`}
            >
                <div className="navbar-header">
                <ul className="navbar-links" ref={linksRef}>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to={"/home"}
                            >
                                <h3>Nova GOT</h3>
                            </NavLink>
                        </li>
                       
                    </ul>
                
                    <FaBars
                        className={`navbar-toggle ${isToggle && "rotate"}`}
                        onClick={() => setIsToggle(!isToggle)}
                    />
                </div>
                <div className="navbar-links-container" ref={linksContainerRef}>
                    <ul className="navbar-links" ref={linksRef}>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to={"/characters"}
                            >
                                <h4>Characters</h4>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to={"/books"}
                            >
                                <h4>Books</h4>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to={"/houses"}
                            >
                                <h4>Houses</h4>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-header2" >
                <ul className="navbar-links" ref={linksRef}>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                                to={"/"}
                            >
                                <h4>LogOut</h4>
                            </NavLink>
                        </li>
                       
                    </ul>
                    

                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    .tranparent {
        background-color: transparent;
        color: white;
    }
    .normal {
        background-color: white;
        color: var(--clr-primary-6);
        box-shadow: var(--light-shadow);
    }
    .navbar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        text-transform: capitalize;
        h2 {
            cursor: pointer;
            color: var(--clr-primary-4);
        }
    }
        .navbar-header2 {

        h4 {
            cursor: pointer;

        }
    }

    .navbar-toggle {
        cursor: pointer;
        color: rgb(95, 171, 246);
        font-size: 1.35rem;
        transition: all 0.2s linear;
    }
    .navbar-toggle.rotate {
        color: var(--clr-primary-4);
        transform: rotate(90deg);
    }

    .navbar-header svg,
    .navbar-social-icons svg {
        fill: dodgerblue;
    }

    .link {
        cursor: pointer;
        display: block;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        text-transform: capitalize;
        transition: all 0.3s linear;
        font-weight: 500;
        width: 100vw;
        color: inherit;
        &:hover {
            background: dodgerblue;
            color: white;
            padding-left: 1.5rem;
        }
    }

    .navbar-links-container {
        overflow: hidden;

        position: absolute;
        z-index: 4;
        .link.active {
        border-bottom: 2px solid var(--clr-primary-6);
    }
    }

    @media screen and (min-width: 800px) {
        position: fixed;
        z-index: 3;
        top: 0;
        .navbar-center {
            height: 70px;
            width: 100vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .navbar-links-container {
            height: auto !important;
            position: unset;
        }
        .link {
            width: auto;
            color: inherit;
        }
        .navbar-links {
            display: flex;
        }
        .navbar-links a {
            padding: 0.2rem;
            margin: 0 0.8rem;
            text-transform: capitalize;
            font-weight: 600;
            transition: none;
            width: auto;
        }
        .navbar-links a:hover {
            padding: 0.2rem;
            color: var(--clr-primary-4);
            background: transparent;
        }
        .navbar-toggle {
            display: none;
        }
    }
`;

export default Navbar;
