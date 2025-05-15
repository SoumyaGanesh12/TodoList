import React from 'react';

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props;
    return(
        <li className='todoItem'>
            {/* Render the child components */}
            {children}
            <div className='actionsContainer'>
                {/* font-awesome icons */}
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }
                }>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}