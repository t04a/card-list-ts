import { useCallback } from 'react';
import { AnimalSlice } from '../../store/reducers/animal-slice';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const Filter: React.FC = () => {
    const dispatch = useAppDispatch();

    const { changeFilter } = AnimalSlice.actions;
    const { filter } = useAppSelector((state) => state.animalReducer);

    const handleFilterChange = useCallback(
        (e: CheckboxChangeEvent) => dispatch(changeFilter({ byLikes: e.target.checked })),
        [dispatch, changeFilter],
    );

    return (
        <Checkbox value={filter.byLikes} onChange={handleFilterChange}>
            Отсортировать по лайкам
        </Checkbox>
    );
};
