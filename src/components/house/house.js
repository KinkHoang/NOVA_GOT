import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Dashboard (props){

    return (
        <>
        <div style={{ display: "flex", flexWrap:"wrap", padding: "50px" }}>
            <div style={{width: "100%" }} >
                <input type="text" onChange={(e) => props.handleSearch(e)}  placeholder="enter first name to search" />
            </div>
            { props.filteredData && props.filteredData.map(item => 
                <Wrapper key={ item.id } style={{width: "45%",  boxShadow: "0 0 8px rgba(0,0,0,0.16)", margin: "15px", padding: "15px" }} >
                    <h4>Name: {item.name}</h4>
                    <h5>Region: {item.region}</h5>
                    <h5>Word: {item.words}</h5>
                    <h5>Coat of Ams: {item.coatOfArms}</h5>
                    <h5>id: {item.url.split("/").pop()}</h5>

                    <Link to={`/house/${item.url.split("/").pop()}`}>Show More</Link> 
                </Wrapper>
            )}
        </div>  
        </>
    );

}
const Wrapper = styled.div`
    h4 {
        color: var(--clr-primary-4);
    }
`;