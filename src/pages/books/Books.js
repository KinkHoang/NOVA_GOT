import React, { useEffect, useState  } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../../components/book/book";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar.js"

import {
    fetchBooks,
    decPage,
    incPage,
} from "../../features/book/bookSlice";

function Books() {
     const { isLoading, books, page } = useSelector((store) => store.books);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks(page));
    }, [dispatch, page]);
    console.log(page, books);


    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        fetch('https://anapioficeandfire.com/api/books')
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
            <Navbar/>
            <div className="section-center">
                <div className="title">
                    <h3 className="heading">Books</h3>
                    <div className="underline"></div>
                </div>
                
                <div >
                <Dashboard path="/books" filteredData={filteredData} handleSearch={handleSearch} />    
                        
        </div>

            </div>
            <Pagination
                dec={decPage}
                inc={incPage}
                page={page}
                fetcher={fetchBooks}
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
export default Books;
