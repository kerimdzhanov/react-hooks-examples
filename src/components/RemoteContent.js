import React, { useState, useEffect } from 'react';

function RemoteContent() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        console.log('\n>> requesting page:', page, '\n'); // >>>

        setLoading(true);

        setTimeout(() => {
            fetch(`/page-${page}.txt`)
                .then((res) => res.text())
                .then((text) => {
                    setLoading(false);
                    setContent(text);
                });
        }, 1000);

        return () => {
            console.log('\n>> unload page:', page, '\n'); // >>>
            setContent('');
        };
    }, [page]);

    return (
        <div>
            <h3>Remote Content</h3>
            {loading && <div>loading...</div>}
            {content && <p className="content">{content}</p>}
            <button disabled={loading} onClick={() => setPage(1)}>1</button>
            <button disabled={loading} onClick={() => setPage(2)}>2</button>
            <button disabled={loading} onClick={() => setPage(3)}>3</button>
            <button disabled={loading} onClick={() => setPage(4)}>4</button>

        </div>
    );
}

export default RemoteContent;