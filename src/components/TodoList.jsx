import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    // this todo array is needed by todoinput component as well, so move it to parent level - app.jsx
    // let todos = [
    //     "Go to gym",
    //     "Eat more fruits and veggies",
    //     "Pick up books from library"
    // ]
    // use props to access todos array passed as an argument

    const {todos} = props;
    // return statement - tells react what to render on the page
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                // return statement - what to do with each iteration through array
                // for each item - print it in the page
                // If there is no return statement, then it will map through the array but won't render anything in UI
                return(
                    // TodoCard is parent component and p tag is passed as a child for it, 
                    // so in TodoComponent need to recieve the child component through props and render it
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            }

            )}
        </ul>
    )
}
