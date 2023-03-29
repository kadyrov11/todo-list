import { useEffect, useState } from "react";
import {v4} from 'uuid';

import AddBtn from "./components/AddBtn";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const [newTodo, setNewTodo] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    data && setTodos(data);
  }, [])
  
  useEffect(() => {
    todos.length && localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  const filterTodos = (arr, filter) => {
    return arr.filter(todo => todo.text.includes(filter))
  } 

  const filteredArr = filterTodos(todos, filter)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
    if(isOpen){
      setNewTodo('')
      setIsEdit(false)
    }
    
  }; 

  const toggleChecked = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  } 
  const addTodo = (text) => {
    const todo = {
      text,
      id: v4(),
      checked: false
    }
    setTodos([todo, ...todos])

    toggleModal()
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  const editTodo = () => {
    setTodos(todos.map(todo => todo.id === todoId ? {...todo, text: newTodo} : todo))
    toggleModal()
  }

  const handleEdit = (id, text) => {
    setNewTodo(text)
    setTodoId(id)
    setIsEdit(true)
    toggleModal()
  } 

  

  return (
    <div className="mainContent">
      <div>
        <Input onChange={(e) => setFilter(e.target.value)} placeholder="Search" />
        <AddBtn onClick={() => toggleModal()} />
        { isOpen && 
          <Modal toggleModal={toggleModal}>
            <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder={isEdit ? 'Edit' : 'Add new todo'} />
            {isEdit ? <Button text='Edit' color="orange" onClick={() => editTodo()} /> : <AddBtn onClick={() => addTodo(newTodo)} /> } 
          </Modal> 
        }
        <TodoList todos={filteredArr} toggleChecked={toggleChecked} handleDelete={deleteTodo} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
