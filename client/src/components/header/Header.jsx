import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import WaveImage from './wave.svg'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с\n комфортом`}</h1>
        <p className={styles.desc}>{`С нашей компанией вы забудете обо всём, кроме \n высокого уровня путешествий`}</p>
      </ContentWrapper>
      <img src={WaveImage} alt="wave" className={styles.wave} />
    </div>
    
  )
}

export default Header