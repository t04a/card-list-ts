import React, { useCallback } from 'react';
import style from './Card.module.css';
import { useAppDispatch } from '../../hooks/redux';
import { AnimalSlice } from '../../store/reducers/animal-slice';
import { DeleteFilled, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { AnimalModel } from '../../models/animal-model';

interface CardProps {
    animal: AnimalModel;
}

const Card: React.FC<CardProps> = ({ animal }) => {
    const { toggleLikeCardState } = AnimalSlice.actions;
    const { deleteCard } = AnimalSlice.actions;
    const dispatch = useAppDispatch();

    const handleToggleLike = useCallback(
        () => dispatch(toggleLikeCardState(animal.id)),
        [animal.id, dispatch, toggleLikeCardState],
    );
    const handleDelete = useCallback(() => dispatch(deleteCard(animal.id)), [animal.id, deleteCard, dispatch]);

    return (
        <div className={style.card}>
            <img src={animal.imageScr} width={'300px'} height={'300px'} alt="" />
            <p>{animal.name}</p>

            <div className={style.like} onClick={handleToggleLike}>
                {animal.isLiked ? (
                    <HeartFilled className={style.likeIcon} />
                ) : (
                    <HeartOutlined className={style.likeIcon} />
                )}
            </div>

            <div className={style.deletePos} onClick={handleDelete}>
                <DeleteFilled className={style.deleteIcon} />
            </div>
        </div>
    );
};

export default Card;
