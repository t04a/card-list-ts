import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AnimalModel} from "../models/animal-model";

interface AnimalApi {
    id: number;
    name: string;
    image_link: string;
}

export const fetchAnimals = createAsyncThunk(
    'animal/fetchAll',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get<AnimalApi[]>('https://zoo-animal-api.herokuapp.com/animals/rand/8');
            const { data } = response;

            return data.map<AnimalModel>(({id, name, image_link}) => ({id, name, imageScr: image_link, isLiked: false}))
        } catch (e) {
            return thunkAPI.rejectWithValue(new Error('Не удалось загрузить зверей'))
        }
    }
)
