import React from 'react'

import styles from './TodoItem.module.css';

import Button from '../Button';

const Todo = ({id, text, completed, handleDelete, handleEdit, toggleChecked}) => {
  return (
    <li className={styles.todo}>
        <input type="checkbox" checked={completed} onChange={() => toggleChecked(id)} />
        <p className={completed ? `${styles.text} ${styles.completed}` : styles.text }>{text}</p>
        <Button text='Edit' color='orange' onClick={() => handleEdit(id, text)} />
        <Button text='Delete' color='red' onClick={() => handleDelete(id)} />
    </li>
  )
}

export default Todo;