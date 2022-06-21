import React, {useEffect, useState} from 'react';
import './App.css';
import {endpoint} from "./api/api";
import Card from "./components/Card/Card";
import axios from "axios";

function App() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                endpoint
            );
            setAnimals(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="app">
            {animals.map((animal: any) => {
                return <Card animal={animal} key={animal.id}/>;
            })}
        </div>
    );
}

export default App;
