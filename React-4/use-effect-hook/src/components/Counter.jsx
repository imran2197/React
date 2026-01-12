import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         setCount(prevCount => prevCount + 1);
    //     });
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter
