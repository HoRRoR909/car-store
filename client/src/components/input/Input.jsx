import React from 'react'

import styles from './styles.module.scss'

const Input = (
    type = "text", 
    name = "", 
    containerClassname = "", 
    placeholder = "", 
    onChange = () => null, 
    error = "",
  ) => {
  return (
    <div className={`${styles.containter} ${containerClassname}`}>
      <input 
        type={type} 
        name={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default Input