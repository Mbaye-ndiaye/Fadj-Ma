import React from 'react'

const ButtonProps = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
    {children}
  </button>
  )
}

export default ButtonProps
