import Reaсt from 'react'
import Nik from './Nik/Nik'
import Navigation from './Navigation/Navigation'
import Scheme from './Scheme/Scheme'
import classes from './Header.module.css'

const Header = () =>{
    return(
        <div className={classes.Header}>
            <div className={classes.HeaderWidth}>
                <Nik/>
                <div className={classes.RightContainer}>
                    <Navigation />
                    <Scheme />
                </div>   
            </div>
                 
        </div>
    )
}


export default Header;