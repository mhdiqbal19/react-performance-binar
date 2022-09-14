import React, { memo } from 'react'
import { useState, useMemo } from 'react';

const Boys = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    console.log("Component Boys");

    const factorial = useMemo(() => factorialOf(number), [number]);

    const onChange = event => {
        setNumber(Number(event.target.value));
    };

    const handleHasil = () => {
        setInc(i => i + 1);
    }
  
    return (
    <div>
        <div>Boys</div>
        <div>
            Factorial of :
            <input type="text" value={number} onChange={onChange} />
            <h3>{factorial}</h3>
            <button onClick={handleHasil}>Hitung</button>
        </div>
    </div>
  )
}
function factorialOf(n) {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default memo(Boys)