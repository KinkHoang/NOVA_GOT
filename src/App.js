

import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Characters from "./pages/characters/Characters";
import Books from "./pages/books/Books";
import Houses from "./pages/houses/Houses";
import ErrorPage from "./pages/ErrorPage";
import SingleCharacter from "./components/character/SingleCharacter";
import SingleBook from "./components/book/SingleBook";
import SingleHouse from "./components/house/SingleHouse";
import Private from './private-router'

function App() {
    return (
        <BrowserRouter>
      <Routes>
        <Route element={<Private/>}>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/character/:id" element={<SingleCharacter />} />
                <Route path="/books" element={<Books />} />
                <Route path="/book/:id" element={<SingleBook />} />
                <Route path="/houses" element={<Houses />} />
                <Route path="/house/:id" element={<SingleHouse />} />
                <Route path="*" element={<ErrorPage />} />

        </Route>
        <Route path="/login" element={<Login />} />
                
      </Routes>
    </BrowserRouter>
       
    );
}

export default App;
