import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";

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
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
        console.log('ololo')
    }, [ ])

    return (
        <div className="app">
            {/*{animals.map((animal: any) => {
                return <Card animal={animal} key={animal.id}/>;
            })}*/}
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users,null, 2)}
        </div>
    );
}

export default App;
