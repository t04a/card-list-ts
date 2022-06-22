import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Animal} from "../../models/Animal";

/*export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}*/

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }
    }
)

export const fetchAnimals = createAsyncThunk(
    'animal/fetchAll',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get<Animal[]>('https://zoo-animal-api.herokuapp.com/animals/rand/8');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить зверей')
        }
    }
)