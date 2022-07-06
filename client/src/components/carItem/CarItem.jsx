import React from 'react'
import {Link} from 'react-router-dom'
import {paths} from '../../paths'
import styles from './styles.module.scss'

const CarItem = ({name = '', price = 0, carImage = '', _id = '', type = ''}) => {
  return (
    <Link to={`${paths.car}/${_id}`} className={styles.carItem} >
      <div className={styles.type}>{type}</div>
      {carImage && <img className={styles.image} src={carImage} alt='carImage' />}
      <div className="styles.info">
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.price}>{price} ₽</span>
      </div>
    </Link>
  )
}

export default CarItem