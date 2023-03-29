import React from 'react'

import styles from './TodoItem.module.css';

import Button from '../Button';

const Todo = ({id, text, checked, handleDelete, handleEdit, toggleChecked}) => {
  return (
    <li className={styles.todo}>
        <input type="checkbox" checked={checked} onChange={() => toggleChecked(id)} />
        <p className={checked ? `${styles.text} ${styles.checked}` : styles.text }>{text}</p>
        <Button text='Edit' color='orange' onClick={() => handleEdit(id)} />
        <Button text='Delete' color='red' onClick={() => handleDelete(id)} />
    </li>
  )
}

export default Todo;