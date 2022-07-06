import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Input from '../../components/input/Input'
import styles from './styles.module.scss'

const CreateCarPage = () => {
  const navigate = useNavigate()
  return (
    <ContentWrapper className={styles.createCar}>
      <Button 
        onClick={() => navigate(-1)}
        isBackButton={true}
        className={styles.backButtonContainer}
      >
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Добавить авто</h1>
        <Input 
          name='name'
          placeholder='Название'
          onChange={() => null}
        />
        <Input 
          name='price'
          placeholder='Цена'
          onChange={() => null}
        />
        <Input 
          name='description'
          placeholder='Описание'
          onChange={() => null}
        />
        <Input 
          name='type'
          placeholder='Тип кузова'
          onChange={() => null}
        />
        <Input 
          name='carImage'
          type='file'
          placeholder='Фото'
          onChange={() => null}
        />
        <Button
          containerClassname={styles.buttonContainer}
          onClick={() => null}
        >
          Добавить
        </Button>
      </form>
    </ContentWrapper>
  )
}

export default CreateCarPage