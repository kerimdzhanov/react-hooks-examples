import { renderHook, act } from '@testing-library/react-hooks';
import { useRemoteContent } from './useRemoteContent';

describe('useRemoteContent', () => {
    let globalFetch;

    beforeAll(() => {
        globalFetch = global.fetch;
    });

    afterAll(() => {
        global.fetch = globalFetch;
    });

    beforeEach(() => {
        global.fetch = jest.fn(() => {
            return Promise.resolve({
                text: () => Promise.resolve('Test Response Content')
            });
        });
    });

    it('should request first page immediately', async () => {
        const {result, waitForNextUpdate} = renderHook(() => {
            return useRemoteContent('/page-{page}.txt');
        });

        expect(result.current.loading).toBe(true);
        expect(global.fetch).toHaveBeenCalledWith('/page-1.txt');

        await waitForNextUpdate();

        expect(result.current.loading).toBe(false);
        expect(result.current.content).toBe('Test Response Content');
    });

    describe('#setPage', () => {
        it('should request the given page', async () => {
            const {result, waitForNextUpdate} = renderHook(() => {
                return useRemoteContent('/page-{page}.txt');
            });

            await waitForNextUpdate();

            act(() => {
               result.current.setPage(2);
            });

            expect(result.current.loading).toBe(true);
            expect(global.fetch).toHaveBeenCalledWith('/page-2.txt');

            await waitForNextUpdate();

            expect(result.current.loading).toBe(false);
            expect(result.current.content).toBe('Test Response Content');
        });
    });
});
