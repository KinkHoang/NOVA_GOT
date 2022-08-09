import React, { useEffect, useState  } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../../components/character/character";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

import {
    fetchCharacters,
    decPage,
    incPage,
} from "../../features/character/characterSlice";

function Characters() {
     const { isLoading, page } = useSelector((store) => store.characters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCharacters(page));
    }, [dispatch, page]);


    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        fetch('https://anapioficeandfire.com/api/characters')
        .then(response => response.json())
            .then((json) => {
                setData(json)
                setFilteredData(json)
            }
        )
    },[])

    const handleSearch = (e) => {
      let value = e.target.value.toLowerCase();
      let result = data.filter( val => val.name.toLowerCase().includes(value));
      if ( value.length >= 2 ) {
          setFilteredData(result);
      }
      else {
          setFilteredData(data);
      }
    }
    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    return (
        
        <Wrapper>
            <div className="section-center">
                <div className="title">
                    <h3 className="heading">Characters</h3>
                    <div className="underline"></div>
                </div>
                
                <div >
                <Dashboard path="/characters" filteredData={filteredData} handleSearch={handleSearch} />    
                        
        </div>

            </div>
            <Pagination
                dec={decPage}
                inc={incPage}
                page={page}
                fetcher={fetchCharacters}
            />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    .section-center {
        padding: 0;
        .title {
            margin-top: 6rem;
        }
        .no-data {
            margin: 3rem;
        }
    }
`;
export default Characters;
