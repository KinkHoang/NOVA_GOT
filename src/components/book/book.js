import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    Input,
    Space
  } from 'antd';
import {
    SearchOutlined,
  } from '@ant-design/icons';
import './style.css';
export default function Dashboard (props){

    return (
        <>
        <Space style={{ paddingTop: 8, display: "flex" }}>
            <SearchOutlined style={{ fontSize: 30}} />
            <Input className="search-input"
                placeholder='Enter name to search..'
                onChange={(e) => props.handleSearch(e)}
            />
        </Space>
        <div style={{ display: "flex", flexWrap:"wrap", paddingTop: "50px" }}>
            { props.filteredData && props.filteredData.map(item => 
                <Wrapper key={ item.id } style={{width: "43%",  boxShadow: "0 0 8px rgba(0,0,0,0.16)", margin: "15px", padding: "15px" }} >
                    <h4>Name: {item.name}</h4>
                    <h5>gender: {item.publisher}</h5>
                    <h5>culture: {item.culture}</h5>
                    <h5>aliases: {item.released}</h5>
                    <h5>aliases: {item.country}</h5>
                    <h5>id: {item.url.split("/").pop()}</h5>

                    <Link to={`/book/${item.url.split("/").pop()}`}>Show More</Link> 
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