import { useAppSelector } from './redux';

interface UseAnimalsOpts {
    filtered?: boolean;
}

export function useAnimals(opts?: UseAnimalsOpts) {
    const { animals, filter } = useAppSelector((state) => state.animalReducer);

    // Если не нужно фильтровать или если нечего фильтровать, возвращаем как animals есть
    if (!opts?.filtered || !animals) {
        return animals;
    }

    return animals.filter((a) => {
        if (filter.byLikes) {
            return a.isLiked;
        }

        return true;
    });
}
