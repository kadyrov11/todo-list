import React from 'react';

import styles from './Modal.module.css';

function Modal({children, toggleModal}) {
  return (
    <div className={styles.backdrop}  >
        <div className={styles.modal}>
          <span className={styles.closeBtn} onClick={toggleModal}>&#10006;</span>
          {children}
        </div>
    </div>
  )
}

export default Modal;