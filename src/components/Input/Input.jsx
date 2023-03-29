import React from 'react'

import styles from './Input.module.css';

function Input({onChange, type="text", ...props }) {
  return (
    <input type={type} onChange={onChange} className={styles.input} {...props} />
  )
}

export default Input;
