import style from './NotFound.module.css';
import image from '../../assets/Img/notfound.png'

const NotFound = () =>{
    return(
        <div className={style.NotFoundContainer}>
            <div>
                <img src={image} alt='Golden retriever'/>
            </div>
            <div className={style.NotFoundDescription}>
                <h2>Not found! To tired to work...</h2>
            </div>
        </div>
    )
}

export default NotFound;