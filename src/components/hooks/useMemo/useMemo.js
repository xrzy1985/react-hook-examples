import { useMemo, useState } from 'react';

function expensive() {
    for (let i = 0; i < 1000000000; i++) {
        var a = 1;      
    }
    console.log('expensive is called');
    return 123;
}

export default function UseMemo(props) {
    const [number, setNumber] = useState(0);
    const [trigger, setTrigger] = useState(false);

    const expensiveMethod = (n) => {
        return isNaN(n) ? 0 : (n <= 1) ? n : expensiveMethod(n - 1) + expensiveMethod(n - 2);
    }
    
    const fibbonacci = expensiveMethod(number);

    const myNumberFromExpensiveWithUseMemo = useMemo(() => { return expensive(); }, []);

    const myNumberFromExpensiveWithoutUseMemo = expensive();

    return (
        <div>
            <h1>useMemo</h1>
            <p><b>Definition:</b> memoizes a value, or caches a value for later use.</p>
            <p><b>Note: </b> useMemo is used when you need to optimize a process that is slowing down your application</p>
            <p><b>Note: </b> for example, calculating the Fibbonacci sequence. Numbers up to 2 digits are not bad, but
                try a number greater than 3 digits, the application essentially stops working.
            </p>
            <p><b>Note: </b> in this example, we are using the fibbonacci sequence to simulate slowdown,
                but we are defining a function outside of our main function that can be memoized. The method expensive will return 
                the number 123 always, but since it is looping a billion times, lag occurs. We can use the useMemo hook to cache 
                the result, so, the app has no slowdown.
            </p>
            <br />
            <label htmlFor="Fibbonacci Sequence">Fibbonacci Sequence:</label>
            <input type="number" value={number} onChange={(e) => {
                if (!isNaN(e.target.value)) {
                    setNumber(e.target.value);
                }
            }}/>
            <span>Sequence: {fibbonacci}</span>
            <br />
            <span>Output from expensive function: {!trigger ? myNumberFromExpensiveWithoutUseMemo : myNumberFromExpensiveWithUseMemo}</span>
            <br />
            <span>Check the box to trigger the expensive function to use the useMemo hook </span>
            <input type="checkbox" value="trigger" onChange={() => setTrigger(trigger ? false : true)}/>
            <br />
            <span>Once the checkbox is triggered, calculating the sequence is still slow, but it is not as slow. The reason is 
                because we are no longer calculating the expensive function every time. React is caching the result, and returning
                that result to us, instead of recalculating every single time the UI is re-rendered, which is quite a lot.
            </span>
        </div>
    )
}