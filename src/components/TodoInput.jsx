import { useState } from "react";

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props;
    // todoValue is the dyanmic value of what the user types in the input bar
    // since the user can change it before adding any number of times, that needs to be a state variable as well

    // const [todoValue, setTodoValue] = useState('');
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                // To clear the input field after it's added
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}