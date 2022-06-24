import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchAnimals} from "./store/reducers/ActionCreators";
import Card from "./components/Card/Card";
import {AnimalSlice} from "./store/reducers/AnimalSlice";
import {Checkbox, Layout} from "antd";
import 'antd/dist/antd.css';
import {Footer} from "antd/es/layout/layout";

function App() {
    const { Header, Content } = Layout;

    const dispatch = useAppDispatch();
    const {filterIsLiked} = AnimalSlice.actions;
    const {animals, isLoading, error} = useAppSelector(state => state.animalReducer)

    useEffect(() => {
        dispatch(fetchAnimals())
    }, [ ])

    return (
        <div className="app">
            <Layout>
                <Header>
                    <h1>Галерея</h1>
                </Header>
                <Content>
                    <div className={'filter'}>
                        <Checkbox
                            onChange={(e) =>
                                dispatch(filterIsLiked(e.target.checked))}>
                            Отсортировать по лайкам
                        </Checkbox>
                    </div>
                    <div className={'card-list'}>
                        {animals.map((animal) => {
                            return animal.isDisplay && <Card animal={animal} key={animal.id}/>;
                        })}
                        {isLoading && <h1>Идет загрузка...</h1>}
                        {error && <h1>{error}</h1>}
                    </div>
                </Content>
                <Footer/>
            </Layout>
        </div>
    );
}

export default App;
