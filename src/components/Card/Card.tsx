import React from 'react';
import style from './Card.module.css'
import {useAppDispatch} from "../../hooks/redux";
import {AnimalSlice} from "../../store/reducers/AnimalSlice";
import {DeleteFilled, HeartFilled, HeartOutlined} from "@ant-design/icons";

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
            {/*<div className={animal.isLiked ? style.likeTrue : style.likeFalse}
                 onClick={() => dispatch(changeIsLiked(animal.id))}>
                like
            </div>*/}
            <div className={style.like}
                onClick={() => dispatch(changeIsLiked(animal.id))}>
                {animal.isLiked ?
                    <HeartFilled className={style.likeIcon}/> :
                    <HeartOutlined className={style.likeIcon}/>}
            </div>
           {/* <div className={style.delete}
                 onClick={() => dispatch(deleteCard(animal.id))}
            >
                del
            </div>*/}
            <div
                className={style.deletePos}
                onClick={() => dispatch(deleteCard(animal.id))}>
                <DeleteFilled className={style.deleteIcon} />
            </div>
        </div>
    );
};

export default Card;