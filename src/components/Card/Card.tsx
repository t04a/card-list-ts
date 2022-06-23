import React from 'react';
import style from './Card.module.css'
import {useAppDispatch} from "../../hooks/redux";
import {AnimalSlice} from "../../store/reducers/AnimalSlice";

interface CardProps {
    animal: any
}

const Card = ({animal}: CardProps) => {

    const {changeIsLiked} = AnimalSlice.actions;
    const {deleteCard} = AnimalSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className={style.card}>
            <img src={animal.image_link} alt=""/>
            <p>{animal.name}</p>
            <div className={animal.isLiked ? style.likeTrue : style.likeFalse}
                 onClick={() => dispatch(changeIsLiked(animal.id))}>like</div>
            <div className={style.delete}
                 onClick={() => dispatch(deleteCard(animal.id))}
            >del</div>
        </div>
    );
};

export default Card;