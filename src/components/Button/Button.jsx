import React from 'react'

function Button({text, color = 'royalblue', onClick}) {
  const btnStyles = {
    cursor: 'pointer',
    minWidth: '60px',
    height: '30px',
    border: `2px solid ${color}`,
    borderRadius: '3px',
    backgroundColor: 'transparent',
    color
  }
  return (
    <button style={btnStyles} onClick={onClick} >
        {text}
    </button>
  )
}

export default Button