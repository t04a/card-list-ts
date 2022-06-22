import {Animal} from "../../models/Animal";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAnimals} from "./ActionCreators";

interface AnimalState {
    animals: Animal[];
    isLoading: boolean;
    error: string;
}

const initialState: AnimalState = {
    animals: [],
    isLoading: false,
    error: ''
}

export const AnimalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAnimals.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchAnimals.fulfilled.type]: (state, action: PayloadAction<Animal[]>) => {
            state.isLoading = false;
            state.error = '';
            state.animals = action.payload;
        },
        [fetchAnimals.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default AnimalSlice.reducer;