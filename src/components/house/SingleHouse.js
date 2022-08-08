import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchSingleHouse } from "../../features/house/houseSlice";
import { useSelector, useDispatch } from "react-redux";
// import Loading from "../Loading";
import image from "../../images/dragon.jpg";

function SingleHouse() {
    const dispatch = useDispatch();

    const { id } = useParams();
    const { house} = useSelector((store) => store.houses);

    useEffect(() => {
        dispatch(fetchSingleHouse(id));
    }, [dispatch, id]);

    let {
        name,
        region,
        words,
        coatOfArms,
    } = house;


    return (
        <Wrapper>
            <section className="section">
                <div className="section-center">
                    <div className="title">
                        <h3 className="heading">{name}</h3>
                        <div className="underline"></div>
                    </div>
                    <div className="container">
                        <img src={image} alt="dragon" />
                        <div className="details-container">
                            <p>Name: {name}</p>
                            <p>Region: {region}</p>
                            <p>Words: {words}</p>
                            <p>CoatOfArms: {coatOfArms}</p>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    .container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        img {
            width: 100%;
            height: 100%;
            min-width: 300px;
        }
        @media (max-width: 556px) {
            grid-template-columns: 1fr;
        }
    }
`;

export default SingleHouse;
