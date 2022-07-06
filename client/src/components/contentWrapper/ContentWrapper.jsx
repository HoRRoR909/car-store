import React from 'react'

import styles from './styles.module.scss'

const ContentWrapper = ({ children, className='' }) => {
  return (
    <div className={ `${styles.container} ${className}` }>{children}</div>
  )
}

export default ContentWrapper