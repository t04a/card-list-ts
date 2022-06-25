import {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchAnimals} from "./store/action-creators";
import Card from "./components/Card/Card";
import {Layout} from "antd";
import 'antd/dist/antd.css';
import {Footer} from "antd/es/layout/layout";
import { Filter } from './components/filter/Filter';
import { useAnimals } from './hooks/use-animal';

function App() {
    const { Header, Content } = Layout;

    const dispatch = useAppDispatch();
    const {isLoading, error} = useAppSelector(state => state.animalReducer)
    const animals = useAnimals({filtered:true});

    useEffect(() => {
        dispatch(fetchAnimals())
    }, [dispatch])

    return (
        <div className="app">
            <Layout>
                <Header>
                    <h1>Галерея</h1>
                </Header>
                <Content>
                    <div className="filter">
                        <Filter />
                    </div>
                    <div className="card-list">
                        {animals?.map((animal) => {
                            return <Card animal={animal} key={animal.id}/>;
                        })}
                        {isLoading && <h2>Идет загрузка...</h2>}
                        {error && <h2>{error.message}</h2>}
                    </div>
                </Content>
                <Footer/>
            </Layout>
        </div>
    );
}

export default App;
