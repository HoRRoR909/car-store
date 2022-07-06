import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/button/Button'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Spinner from '../../components/spinner/Spinner'
import { getCar } from '../../store/car/carSlice'
import styles from './styles.module.scss'

const CarPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { car, isLoading } = useSelector(state => state.carReducer) 

  useEffect(() => {
    dispatch(getCar(id))
  }, [dispatch, id])

  if (isLoading) return <Spinner />

  return car && (
    <ContentWrapper className={styles.car}>
      <div className={styles.sescContent}>
        <Button onClick={() => navigate(-1)} isBackButton={true}>Назад</Button>
        <h1 className={styles.title}>{car.name}</h1>
        <div className={styles.price}>{car.price}</div>
        <Button
          containerClassName={styles.buyBtnContainer}
          onClick={() => navigate('/order')}
        >
          Оформить заказ
        </Button>
        <p className={styles.desc}>{car.description}</p>
      </div>
      <div className={styles.imageContent}>
        <img className={styles.image} src={car.carImage} alt="carImage" />
      </div>
    </ContentWrapper>
  )
}

export default CarPage