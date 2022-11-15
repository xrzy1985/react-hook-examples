import { useCallback, useEffect, useState } from 'react';

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [values] = useState(['Use effect triggered ', 'because count is a dependency.'])
    // const stringConcat = () => values[0].concat(values[1]); THIS WILL THROW A WARNING
    const stringConcat = useCallback(() => {
        return values[0].concat(values[1]);
    }, [values])

    useEffect(() => {
        console.log(stringConcat());
    }, [stringConcat]);

    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>useCallback</h1>
            <p><b>Definition:</b> returns a memoized function of the actual function</p>
            <p><b>Note: </b> the memoized version is not the same function, it is just basically an identical copy</p>
            <p><b>Note: </b> useCallback is great to use when you have something that returns values, but 
                doesn't need to be called every time the UI re-renders.
            </p>
            <p><b>Note: </b> usually, useCallback is used when you have a function going into a dependency array, such 
                as our use of useEffect on this component. We are concatenating two strings, and console logging the results.
                We don't need to call this function over and over again, since it will not change. 
            </p>
            <br />
            <button onClick={decrement}>decrement</button>
            <span>  </span>
            <span>{count}</span>
            <span>  </span>
            <button onClick={increment}>increment</button>
        </div>
    );
}