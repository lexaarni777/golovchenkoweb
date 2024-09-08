import Reaсt from 'react'
import classes from './Footer.module.scss'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import LeetCodeImg from '../../media/leetcode.png'

import Nik from '../Header/Nik/Nik';
import { NavLink } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className={classes.Footer} id='Contact Me'>
           <div className={classes.FooterBlock}>
                <Nik/>
                <div className={classes.ContactBlock}>
                        <NavLink to='https://github.com/lexaarni777'>
                            <FaGithub className={classes.SocialImg} size='30px'/>
                        </NavLink>
                        <NavLink to='https://t.me/lexaarni777'>
                            <FaTelegram className={classes.SocialImg} size='30px'/>
                        </NavLink>
                        <NavLink className={classes.SocialImg} to='https://www.instagram.com/lexaarni777yandexru/'>
                            <RiInstagramFill className={classes.SocialImg} size='30px'/>
                        </NavLink>
                        <NavLink className={classes.LeetCodeImg} to='https://leetcode.com/u/lexaarni777/'>
                            <img src={LeetCodeImg} width='30px' heiht='30px' alt='LeetCode'/>
                        </NavLink>



                </div>
                
            </div>         
        </div>
    )
}


export default Footer;