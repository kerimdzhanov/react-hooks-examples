import React, { useState, useEffect } from 'react';
import { useRemoteContent } from '../hook/useRemoteContent';

function RemoteContent() {
    const { loading, content, setPage } = useRemoteContent('/page-{page}.txt');

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
