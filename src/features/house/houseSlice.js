import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    houses: [],
    page: 1,
    house: {},
};

export const fetchHouses = createAsyncThunk(
    "houses/fetchHouses",
    async (page, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/houses/?page=${page}`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);
export const fetchSingleHouse = createAsyncThunk(
    "houses/fetchSingleHouse",
    async (id, thunkApi) => {
        try {
            const res = await axios.get(
                `https://anapioficeandfire.com/api/houses/${id}`
            );
            return res.data;
        } catch (error) {
            thunkApi.rejectWithValue("something went wrong");
        }
    }
);

const houseSlice = createSlice({
    name: "house",
    initialState,
    reducers: {
        getHouses: (state) => {
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
        // [fetchHouses.pending]: (state) => {
        //     state.isLoading = true;
        // },
        // [fetchHouses.fulfilled]: (state, { payload }) => {
        //     state.isLoading = false;
        //     state.houses = payload;
        // },
        // [fetchHouses.rejected]: (state) => {
        //     state.isLoading = false;
        // },
        [fetchHouses.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchHouses.fulfilled]: (state, { payload }) => {
            state.houses = payload;
            state.isLoading = false;
        },
        [fetchHouses.rejected]: (state) => {
            state.isLoading = false;
        },
        [fetchSingleHouse.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSingleHouse.fulfilled]: (state, { payload }) => {
            state.house = payload;
            state.isLoading = false;
        },
        [fetchSingleHouse.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getHouses, decPage, incPage } = houseSlice.actions;
export default houseSlice.reducer;
