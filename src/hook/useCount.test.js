import { renderHook, act } from '@testing-library/react-hooks';
import {useCount} from './useCount';

describe('useCount', () => {
    it('should increase the counter', () => {
        const {result} = renderHook(() => useCount());

        act(() => {
            const [, increment] = result.current;
            increment();
        });

        const [count] = result.current;
        expect(count).toBe(1);

        act(() => {
            const [, increment] = result.current;
            increment();
        });

        expect(result.current[0]).toBe(2);
    });
});
