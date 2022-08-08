import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";

function Pagination({ page, dec, inc, fetcher }) {
    const dispatch = useDispatch();
    const handleDec = () => {
        if (!page <= 1) {
            dispatch(dec());
            dispatch(fetcher(page--));
        }
    };
    const handleInc = () => {
        console.log("dec");
        dispatch(inc());
        dispatch(fetcher(page++));
    };
    return (
        <Wrapper className="pagination">
            <button
                disabled={page === 1 ? true : false}
                onClick={handleDec}
                className={`btn ${page === 1 && "btn-disable"}`}
            >
                prev
            </button>
            <button onClick={handleInc} className="btn">
                next
            </button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 3rem auto;
    .btn {
        cursor: pointer;
        background-color: transparent;
        margin-right: 2rem;
        font-size: 1.2rem;
        color: var(--clr-primary-4);
        font-weight: bold;
        border: 2px solid var(--clr-primary-4);
        padding: 0.3rem;
        text-transform: capitalize;
        border-radius: 4px;
        &:hover {
            background-color: var(--clr-primary-3);
            color: var(--clr-white);
        }
    }
    .btn-disable {
        color: var(--clr-grey-4);
        border: 2px solid var(--clr-grey-4);
        &:hover {
            background-color: var(--clr-grey-3);
        }
    }
`;

export default Pagination;
