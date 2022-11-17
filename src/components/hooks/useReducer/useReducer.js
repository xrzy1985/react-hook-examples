import axios from 'axios';
import { useReducer } from 'react';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    USER_INPUT: 'userInput',
    C_COLOR: 'changeColor'
}

function getReq() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((resp) => {
        const {data} = resp;
        return data;
    });
}

export default function UseReducer(props) {
    // dispatch really means send
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case ACTIONS.INCREMENT:
                return { ...state, count: state.count + 1 };
            case ACTIONS.DECREMENT:
                return { ...state, count: state.count - 1 };
            case ACTIONS.C_COLOR:
                return { ...state, backgroundColor: (state.backgroundColor === 'blue' ? 'red' : 'blue') };
            case ACTIONS.USER_INPUT:
                return {...state, userInput: action.payload}
            default:
                break;
        }
    }, { count: 0, backgroundColor: 'red', userInput: '' });

    return (
        <div>
            <h1>useReducer</h1>
            <p><b>Definition:</b> is a good choice for managing complex state in app instead of using useState</p>
            <p><b>Note: </b> for small bits of state, useState is great, but for complexity, redux or useReducer is required.</p>
            <br />
            <p>Count: {state.count}</p>
            <br />
            <button onClick={() => { dispatch({ type: ACTIONS.DECREMENT }); }}>Decrement</button>
            <span>    </span>
            <button onClick={() => { dispatch({ type: ACTIONS.INCREMENT }); }}>Increment</button>
            <span>    </span>
            <button style={{ backgroundColor: state.backgroundColor }} onClick={() => { dispatch({ type: ACTIONS.C_COLOR }); }}>Change Color</button>
            <br />
            <input type="text" value={state.userInput} onChange={(e) => {
                dispatch({ type: ACTIONS.USER_INPUT, payload: e.target.value})
            }}/>
            <br />
            <span>The user input: {state.userInput}</span>
            <br />
            <button onClick={() => {
                const data = getReq();
            }}>Get Users</button>

        </div>
    );
}