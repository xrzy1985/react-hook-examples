import { useRef, useState } from 'react';

export default function UseRef(props) {
    const [seconds, setSeconds] = useState(0);
    const timer = useRef(0);
    const timerInterval = useRef(0);

    function startTimer() {
        timerInterval.current = setInterval(() => {
            setSeconds(prev => prev + 1);
            timer.current += 1;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval.current);
        timerInterval.current = 0;
        setSeconds(0);
    }

    return (
        <div>
            <h1>useRef</h1>
            <p><b>Definition:</b> used to persist a value between re-renders of the UI</p>
            <p><b>Note: </b> if you have a value you want to keep, stay the same, between re-renders, use the useRef hook</p>
            <br />
            <span>Timer: {seconds}</span>
            <br />
            <span>Reference: {timer.current}</span>
            <br />
            <button onClick={startTimer}>Start the timer</button>
            <br />
            <button onClick={stopTimer}>Stop the timer</button>
            <br />
            <p><b>Note: </b> see how the reference of timer stays the same even between renders. Stopping the timer will clear the timer,
                but you can still have access to the ref value.
            </p>
        </div>
    )
}