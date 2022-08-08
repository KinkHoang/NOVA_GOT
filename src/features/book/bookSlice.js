import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    books: [],
    page: 1,
    book: {},
};

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async (page, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/books/?page=${page}&pageSize=12`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);

export const fetchSingleBook = createAsyncThunk(
    "books/fetchSingleBook",
    async (id, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/books/${id}`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBooks: (state) => {
            return state;
        },
        incPage: (state) => {
            state.page = state.page + 1;
        },
        decPage: (state) => {
            state.page = state.page - 1;
        },
    },
    extraReducers: {

        [fetchBooks.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchBooks.fulfilled]: (state, { payload }) => {
            state.books = payload;
            state.isLoading = false;
        },
        [fetchBooks.rejected]: (state) => {
            state.isLoading = false;
        },
        [fetchSingleBook.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSingleBook.fulfilled]: (state, { payload }) => {
            state.book = payload;
            state.isLoading = false;
        },
        [fetchSingleBook.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getBooks, incPage, decPage } = bookSlice.actions;
export default bookSlice.reducer;
