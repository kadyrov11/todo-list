import React from 'react'

import styles from './Input.module.css';

function Input({onChange, ...props }) {
  return (
    <input type='text' onChange={onChange} className={styles.input} {...props} />
  )
}

export default Input;
