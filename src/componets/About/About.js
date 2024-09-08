import Reaсt from 'react'
import classes from './About.module.scss'
import ImageMy from '../../media/mysky.jpg'
import { NavLink } from 'react-router-dom'
const About = () =>{
    return(
        <div id='About' className={classes.About}>
           <div className={classes.Heading}>
                <p className={classes.HeadingTop}>About me</p>
                <p className={classes.HeadingBot}>My introduction</p>
           </div>
           <div className={classes.Description}>
                <div className={classes.DescriptionLeft}>
                        <img src={ImageMy} width='300px' alt='ImageMy'/>
                </div>
                <div className={classes.DescriptionRight}>
                        <p>Я фронтенд-разработчик из Санкт-Петербурга.
                            У меня есть серьезная страсть к UI эффектам, анимации и созданию интуитивно понятного, динамичного пользовательского интерфейса.
                            Давайте же сделаем что-то особенное.
                        </p>
                        
                        <table >
                            <thead>
                                <tr>
                                    <th>5</th> 
                                    <th>5</th> 
                                    <th>5</th>
                                    <th>25</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={classes.TableText}> 
                                    <td>Лет<br/>опыта</td> 
                                    <td>Законченных<br/>pet-project</td> 
                                    <td>Законченных<br/>курсов</td> 
                                    <td>Участий в<br/>митапах</td> 
                                </tr>

                            </tbody>
                        </table>
                </div>
           </div>
        </div>
    )
}


export default About;