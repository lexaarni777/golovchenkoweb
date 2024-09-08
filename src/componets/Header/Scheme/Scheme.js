import Reaсt from 'react'
import classes from './Scheme.module.css'
import moon from '../../../media/moon.png'
const Scheme = () =>{
    return(
        <div className={classes.Scheme}>
           <img
                src={moon}
                width='30px'

            />
           
        </div>
    )
}




export default Scheme;