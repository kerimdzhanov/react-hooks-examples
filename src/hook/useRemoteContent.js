import { useEffect, useMemo, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'request':
            return {
                ...state,
                loading: true,
                content: '',
            };

        case 'response':
            return {
                ...state,
                loading: false,
                content: action.payload.content,
            };

        case 'set_page':
            return {
                ...state,
                page: action.payload.page,
            };

        default:
            throw new Error(`Unrecognized action ${action.type}`);
    }
}

export const useRemoteContent = (urlTemplate, initialPage = 1) => {
    const [state, dispatch] = useReducer(
        reducer,
        {
            loading: true,
            content: '',
            page: initialPage,
        },
    );

    useEffect(() => {
        dispatch({ type: 'request' });

        fetch(urlTemplate.replaceAll('{page}', state.page))
            .then((res) => res.text())
            .then((content) => {
                dispatch({
                    type: 'response',
                    payload: { content },
                });
            });
    }, [state.page]);

    return useMemo(() => ({
        loading: state.loading,
        content: state.content,
        setPage: (page) => {
            dispatch({
                type: 'set_page',
                payload: { page },
            })
        },
    }), [state.loading, state.content, dispatch]);
}
