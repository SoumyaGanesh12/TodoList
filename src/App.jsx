import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
  
function App() {
  // let todos = [
  //   "Go to gym",
  //   "Eat more fruits and veggies",
  //   "Pick up books from library"
  // ]

  // todos is a list that users are going to interact with - need to define it as a stateful variable
  // useState takes null or no value or default value as param
  const [todos, setTodos] = useState([
    "Go to gym",
    "Eat more fruits and veggies",
    "Pick up books from library"
  ])

  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // On refresh, the changes should persist - so use hook useEffect
  // Params - callback fn and dependency array
  // If dependency array is empty, it means refresh of page
  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  //TodoList - just requires access to array to display the items
  // todos will have the updated list because of state management
  //TodoInput - need to make use of state to add or modify the list
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}
                todos={todos}/>
    </>
  ) 
}

export default App
