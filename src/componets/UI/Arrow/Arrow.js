import React, { useState } from 'react'; // Импортируем useState
import classes from './Arrow.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';

const Arrow = () =>{
    const [isRotated, setIsRotated] = useState(false); // Состояние для отслеживания поворота

    const toggleRotation = () => {
        setIsRotated(!isRotated); // Переключаем состояние
    };

    return(

            <MdKeyboardArrowDown
                color='#FF6F61' 
                size='48px'
                onClick={toggleRotation} // Обработчик для переключения
                className={isRotated ? classes.rotated : classes.MdKeyboardArrowDown} // Применяем класс для поворота
            />
    )
}


export default Arrow;