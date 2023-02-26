import style from './Loggin.module.css'
import { Link } from 'react-router-dom'
import image from '../Img/golden_retriever_drawing.png'

const Loggin = () =>{
    return(
        <div className={style.LogginContainer}>
            <div className={style.LogginImg}>
                <img src={image} alt='Dogs'/>  
            </div>
            <div className={style.LogginDescription}>
                <h2>Woofipedia</h2>
                <h4>Learn all you can about our furry friends!</h4>
                <Link to='home'>ENTER</Link>
            </div>
        </div>  
    )
}

export default Loggin