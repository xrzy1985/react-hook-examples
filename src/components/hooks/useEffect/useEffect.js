import { useEffect, useState } from 'react';

export default function UseEffect(props) {
    const [value, setValue] = useState('');
    const [allow, setAllow] = useState(false);

    useEffect(() => {
        if (value.length > 0) {
            setAllow(value === 'password' ? true : false);
        }
    }, [value]);

    const test = () => value === 'password';

    const disable = () => {
        return !allow && !test();
    };

    return (
        <div>
            <h1>useEffect</h1>
            <p><b>Note: </b> it will run the logic at initialization, destruction, and every time changes occur</p>
            <p><b>Note: </b> a good use case is when you need to disable a button until a certain value meets the criteria</p>
            <br />
            <input type="text" name="value" id="input-field" onChange={(e) => { setValue(e.target.value) }}/>
            <br />
            { !allow && !test ? <h6 style = {{'color': 'red'}}>Enter a correct password</h6> : null}
            <button type="submit" disabled={disable()}>Submit</button>
        </div>
    );
}