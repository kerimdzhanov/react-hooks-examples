import {useCallback, useState} from 'react';

export const useCount = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return [count, increment];
};