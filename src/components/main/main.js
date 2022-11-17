import './main.scss';
import { useState } from 'react';
import UseCallback from '../hooks/useCallback/useCallback';
import UseMemo from '../hooks/useMemo/useMemo';
import UseRef from '../hooks/useRef/useRef';
import UseReducer from '../hooks/useReducer/useReducer';
import UseEffect from '../hooks/useEffect/useEffect';

export default function Main(props) {
    const [listItem, setListItem] = useState(null);
    const [selected, setSelected] = useState('useState');
    const [choices] = useState(['useState', 'useCallback', 'useMemo', 'useRef', 'useReducer', 'useEffect'])

    const items: object[] = [
        {id: 1, name: 'Eggs', price: 2.39},
        {id: 2, name: 'Doritos', price: 5.49},
        {id: 3, name: 'Bread', price: 1.99},
        {id: 4, name: 'Cereal', price: 4.59},
        {id: 5, name: 'Green Pepper', price: .99},
        {id: 6, name: 'Frozen Pizza', price: 4.99},
        {id: 7, name: 'Coffee Creamer', price: 4.99},
        {id: 8, name: 'Sandwich Meat', price: 4.50}
    ];

    function handleGroceryList(): object[] {
        return items;
    }

    function clickItem(event, index): void {
        if (listItem?.id !== index) {
            console.log(`${event.target.innerText} was selected.`);
            setListItem(handleGroceryList().find(i => i.id === index));
        }
    }

    const clearSelection = () => setListItem(null);

    const setChoice = (choice) => setSelected(choice);

    return (
        <main className="main" key="1">
            <div className="choices">
            {
                choices.map((choice, index) => {
                    return <button
                                key={`btn-${index}`}
                                onClick={() => { setChoice(choice); }}
                                style={ selected === choice ? { backgroundColor: '#055AEA', color: 'white' } : {}}>{choice}</button>
                })
            }
            </div>
            { selected === 'useState' ?
                <div className="content">
                    <h2>List Items</h2>
                    {
                        handleGroceryList().map((item) => {
                            return <p key={`p-${item.id}`} onClick={(e) => clickItem(e, item.id)}>{item.name}</p>
                        })
                    }
                    <br />
                    <div>
                        <span>The item you have selected: </span>
                        <b><span onDoubleClick={() => clearSelection()}>{listItem ? listItem.name : null}</span></b>
                    </div>
                </div> :
                selected === 'useCallback' ?
                    <UseCallback /> :
                selected === 'useMemo' ?
                    <UseMemo /> :
                selected === 'useRef' ?
                    <UseRef /> :
                selected === 'useReducer' ?
                    <UseReducer /> :
                selected === 'useEffect' ?
                    <UseEffect /> : null
            }
        </main>
    );
}