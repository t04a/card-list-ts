import React from 'react';
import style from './Card.module.css'

interface CardProps {
    animal: any
}

const Card = ({animal}: CardProps) => {
    return (
        <div className={style.card}>
            <img src={animal.image_link} alt=""/>
            <p>{animal.name}</p>
            <div className={style.delete} />
        </div>
    );
};

export default Card;