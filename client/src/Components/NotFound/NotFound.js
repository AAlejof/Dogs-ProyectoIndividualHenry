import style from './NotFound.module.css';
import image from '../Img/notfound.png'

const NotFound = () =>{
    return(
        <div className={style.NotFoundContainer}>
            <div className={style.NotFoundDescription}>
                <h2>Not found! To tired to work...</h2>
            </div>
            <div>
                <img src={image} alt='Golden retriever'/>
            </div>
        </div>
    )
}

export default NotFound;