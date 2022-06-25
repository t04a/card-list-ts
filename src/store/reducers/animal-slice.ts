import { AnimalId, AnimalModel } from '../../models/animal-model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAnimals } from '../action-creators';

interface FilterState {
    byLikes: boolean;
}

interface AnimalState {
    animals?: AnimalModel[];
    filter: FilterState;
    isLoading: boolean;
    error?: Error;
}

const initialState: AnimalState = {
    filter: {
        byLikes: false,
    },
    isLoading: false,
};

export const AnimalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
        changeFilter(state, action: PayloadAction<Partial<FilterState>>) {
            state.filter = { ...state.filter, ...action.payload };
        },

        deleteCard(state, action: PayloadAction<AnimalId>) {
            const { animals } = state;
            if (!animals) {
                return;
            }

            const index = animals.findIndex((animal) => animal.id === action.payload);
            animals.splice(index, 1);
        },

        toggleLikeCardState(state, action: PayloadAction<AnimalId>) {
            const { animals } = state;
            if (!animals) {
                return;
            }

            const animal = animals.find((animal) => animal.id === action.payload);
            if (!animal) {
                return;
            }

            animal.isLiked = !animal.isLiked;
        },
    },
    extraReducers: {
        [fetchAnimals.pending.type]: (state) => {
            state.isLoading = true;
            state.animals = undefined;
            state.error = undefined;
        },
        [fetchAnimals.fulfilled.type]: (state, action: PayloadAction<AnimalModel[]>) => {
            state.isLoading = false;
            state.animals = action.payload;
        },
        [fetchAnimals.rejected.type]: (state, action: PayloadAction<Error>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default AnimalSlice.reducer;
