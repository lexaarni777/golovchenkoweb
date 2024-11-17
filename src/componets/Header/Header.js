import React, { useState } from 'react';
import Nik from './Nik/Nik'
import Navigation from './Navigation/Navigation'
import Scheme from './Scheme/Scheme'
import classes from './Header.module.scss'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";


const Header = () =>{
    // Добавляем состояние для управления видимостью меню
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Функция для переключения видимости меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className={classes.Header}>
            <div className={classes.HeaderWidth}>
                <Nik/>
                <div className={`${classes.RightContainer} ${isMenuOpen ? classes.activeMiniMenu : ''}`}>
                    {/* Показываем Navigation только на маленьких экранах, когда меню открыто */}
                    <Navigation />
                </div>


                <Scheme />
                {isMenuOpen?<IoClose
                        className={classes.MiniMenu}
                        onClick={toggleMenu}/>
                    :<PiDotsThreeOutlineVerticalFill 
                        className={classes.MiniMenu}
                        onClick={toggleMenu} 
                    /> 
                }
                
            </div>
                 
        </div>
    )
}


export default Header;