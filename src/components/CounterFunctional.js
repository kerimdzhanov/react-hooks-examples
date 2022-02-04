import React, {useContext, useState} from 'react';
import {useCount} from '../hook/useCount';

function CounterFunctional() {
    const [countA, incrementA] = useCount(0);
    const [countB, incrementB] = useCount(0);
    const [countC, incrementC] = useCount(0);

    return (
        <div>
            <h3>Functional Component</h3>
            <p>Counter: {countA}</p>
            <p>Counter: {countB}</p>
            <p>Counter: {countC}</p>
            <button onClick={() => incrementA()}>
                Increment A
            </button>
            <button onClick={() => incrementB()}>
                Increment B
            </button>
            <button onClick={() => incrementC()}>
                Increment C
            </button>
        </div>
    );
}

export default CounterFunctional;