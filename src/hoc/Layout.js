import Reaсt from 'react'
import Header from '../componets/Header/Header';
import classes from './Layout.module.scss'
import Home from '../componets/Home/Home';
import About from '../componets/About/About';
import Skills from '../componets/Skills/Skills';
import Qualification from '../componets/Qualification/Qualification';
import Portfolio from '../componets/Portfolio/Portfolio';
import Footer from '../componets/Footer/Footer'

const Layout = () =>{
    
    return(
        <div className={classes.Layout}>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Qualification/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}


export default Layout;