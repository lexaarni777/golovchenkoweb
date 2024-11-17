import Reaсt from 'react'
import classes from './Home.module.scss'

import LeetCodeImg from '../../media/leetcode.png'
import ImageMy from '../../media/my.jpg'
import { NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Home = () =>{
    return(
        <div id='Home' className={classes.Home}>
            <div className={classes.Container}>
                <div className={classes.Social}>
                        <NavLink className={classes.SocialImg} to='https://www.instagram.com/lexaarni777yandexru/'>
                            <RiInstagramFill color='#FF6F61' size='30px'/>
                        </NavLink>
                        <NavLink className={classes.SocialImg} to='https://t.me/lexaarni777'>
                            <FaTelegram color='#FF6F61' size='30px'/>
                        </NavLink>
                        <NavLink className={classes.SocialImg} to='https://github.com/lexaarni777'>
                            <FaGithub color='#FF6F61' size='30px'/>
                        </NavLink>
                        <NavLink className={classes.LeetCode} to='https://leetcode.com/u/lexaarni777/'>
                            <img src={LeetCodeImg} width='30px' heiht='30px' alt='LeetCode'/>
                        </NavLink>
                </div>
                <div className={classes.Description}>
                        <p className={classes.HeadingTop}>
                            Привет, меня зовут Алексей
                        </p>
                        <p className={classes.HeadingBott}>
                            Frontend developer
                        </p>
                        <p className={classes.DescriptionText}>
                            Веб-разработчик с обширными знаниями для воплощения ваших задумок, работающий в области веб-технологий и UI/UX дизайна, выполняющий качественную работу.
                        </p>
                </div>
                <div className={classes.ImageMy}>
                        <img src={ImageMy} width='300px' alt='ImageMy'/>
                </div>
           </div>
        </div>
    )
}


export default Home;