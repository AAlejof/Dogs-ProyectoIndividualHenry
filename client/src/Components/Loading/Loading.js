import style from './Loading.module.css';
import loading from '../../assets/Img/paws.gif';

const Loading = () =>{
    return(
        <div className={style.LoadingContainer}>
            <img src={loading} alt='Loading'/>
        </div>
    );
};

export default Loading;