import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchSingleCharacter } from "../../features/character/characterSlice";
import { useSelector, useDispatch } from "react-redux";
// import Loading from "../Loading";
import image from "../../images/dragon.jpg";

function SingleCharacter() {
    const dispatch = useDispatch();

    const { id } = useParams();
    const { character} = useSelector((store) => store.characters);

    useEffect(() => {
        dispatch(fetchSingleCharacter(id));
    }, [dispatch, id]);

    let {
        name,
        gender,
        culture,
        born,
        died,
        titles,
        aliases,
        tvSeries,
        playedBy,
    } = character;

    titles = titles && titles.join(",");
    aliases = aliases && aliases.join(",");
    tvSeries = tvSeries && tvSeries.join(",");
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
                            <p>Gender: {gender}</p>
                            <p>Culture: {culture}</p>
                            <p>Born: {born}</p>
                            <p>Died: {died}</p>
                            <p>Titles: {titles}</p>
                            <p>Aliases: {aliases}</p>
                            <p>Tv Series: {tvSeries}</p>
                            <p>Played By: {playedBy}</p>
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

export default SingleCharacter;
