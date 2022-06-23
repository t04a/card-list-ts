import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchAnimals, fetchUsers} from "./store/reducers/ActionCreators";
import Card from "./components/Card/Card";
import {AnimalSlice} from "./store/reducers/AnimalSlice";

function App() {
/*
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(endpoint);
            setAnimals(result.data);
        };
        fetchData();
    }, []);*/

    const dispatch = useAppDispatch();
    const {filterIsLiked} = AnimalSlice.actions;
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    const {animals, isLoading, error} = useAppSelector(state => state.animalReducer)

    useEffect(() => {
        // dispatch(fetchUsers())
        dispatch(fetchAnimals())
        // console.log('ololo')
    }, [ ])

    return (
        <div className="app">
            {/*{animals.map((animal: any) => {
                return <Card animal={animal} key={animal.id}/>;
            })}*/}
            <div className={'filter'}>
                <label>
                    <input type="checkbox"
                    onChange={(e) => dispatch(filterIsLiked(!!e.target.checked))}/>
                    отсортировать
                </label>
            </div>
            {animals.map((animal) => {
                return animal.isDisplay && <Card animal={animal} key={animal.id}/>;
            })}
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {/*{JSON.stringify(users,null, 2)}*/}
            {/*{JSON.stringify(animals, null, 2)}*/}
        </div>
    );
}

export default App;
