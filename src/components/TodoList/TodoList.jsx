import React from 'react'
import TodoItem from '../TodoItem'

import styles from './TodoList.module.css';

const TodoList = ({todos, toggleChecked, handleDelete, handleEdit}) => {
  const todoElems = todos.map(todo => <TodoItem key={todo.id} {...todo} toggleChecked={toggleChecked} handleDelete={handleDelete} handleEdit={handleEdit} />)
  return (
    <ul className={styles.list}>
        {todoElems}

    </ul>
  )
}

export default TodoList