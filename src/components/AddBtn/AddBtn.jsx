import React from 'react'

import styles from './AddBtn.module.css';

const AddTodo = ({onClick}) => {
  return (
    <>
        <button onClick={onClick} className={styles.addBtn}>+</button>
    </>
  )
}

export default AddTodo;