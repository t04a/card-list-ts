import {combineReducers, configureStore} from "@reduxjs/toolkit";
import animalReducer from './reducers/animal-slice'

const rootReducer = combineReducers({
    animalReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
