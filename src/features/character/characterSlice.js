import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    characters: [],
    page: 1,
    character: {},
};

export const fetchCharacters = createAsyncThunk(
    "character/fetchCharacters",
    async (page, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/characters/?page=${page}&pageSize=12`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);

export const fetchSingleCharacter = createAsyncThunk(
    "characters/fetchSingleCharacter",
    async (id, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/characters/${id}`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        getCharacters: (state) => {
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
        [fetchCharacters.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCharacters.fulfilled]: (state, { payload }) => {
            state.characters = payload;
            state.isLoading = false;
        },
        [fetchCharacters.rejected]: (state) => {
            state.isLoading = false;
        },
        [fetchSingleCharacter.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSingleCharacter.fulfilled]: (state, { payload }) => {
            state.character = payload;
            state.isLoading = false;
        },
        [fetchSingleCharacter.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getCharacters, decPage, incPage } = characterSlice.actions;
export default characterSlice.reducer;
