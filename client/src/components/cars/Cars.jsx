import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getCars } from '../../store/cars/carsSlice'
import { paths } from '../../paths'
import CarItem from '../carItem/CarItem'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import Spinner from '../spinner/Spinner'
import Button from '../button/Button'
import styles from './styles.module.scss'
import { useSortCars } from '../../hooks/useSortCars'

const Cars = () => {
  const dispatch = useDispatch()
  const { cars, isLoading } = useSelector((state) => state.carsReducer)
  const {isDescSort, setIsDescSort, sortedCars} = useSortCars(cars || [])

  useEffect(() => {
    dispatch(getCars())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className={styles.sort}>
        <ContentWrapper className={styles.carsHeader}>
          <Button className={styles.sortBtn} onClick={() => setIsDescSort(!isDescSort)}>
            Сортировать по цене {`${isDescSort ? '+' : '-'}`}
          </Button>
          <Link to={paths.createCar} className={styles.createCarBtn}>Добавить автомобиль</Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.carsGrid}>
        {sortedCars && sortedCars.map((car) => <CarItem {...car} key={car._id} />)}
      </ContentWrapper>
    </>
  )
}

export default Cars