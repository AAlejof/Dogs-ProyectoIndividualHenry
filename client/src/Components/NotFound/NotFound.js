import { Link } from 'react-router-dom';
import style from './NotFound.module.css';
import image from '../Img/golden_retriever_drawing.png'

const NotFound = () =>{
    return(
        <div className={style.NotFoundContainer}>
            <div className={style.NotFoundDescription}>
                <h2>Not found!</h2>
                <Link to='/home'>Go back</Link>
            </div>
            <div>
                <img src={image} alt='Golden retriever'/>
            </div>
        </div>
    )
}

export default NotFound;