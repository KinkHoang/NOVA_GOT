import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book/bookSlice";
import characterSlice from "./character/characterSlice";
import houseSlice from "./house/houseSlice";

const store = configureStore({
    reducer: {
        books: bookSlice,
        characters: characterSlice,
        houses: houseSlice,
    },
});

export default store;
