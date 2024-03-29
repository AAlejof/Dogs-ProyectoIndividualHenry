import style from './DogDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { getDogDetail, clearDogDetail } from '../../redux/actions';
import Loading from '../Loading/Loading'

const DogDetail = (props) =>{
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogDetail(props.match.params.id));
        return () => {
            dispatch(clearDogDetail());}
    },[dispatch, props.match.params.id])

    const selectedDog = useSelector((state) => state.dogs);
    const dog = selectedDog[0]
    const dogTempers = dog !== undefined && 'temper' in dog ? dog.temper.join(', ') : '';
    return(
        
        <div>
            <h2 className={style.h2Detail}>Dog breed detail</h2>
            {selectedDog.length ?
            <div className={style.DogDetailContainer}>
                <div className={style.dogDetail}>
                    <div> 
                        <img src={dog.image} alt='Dog Profile'/>
                    </div>
                    <div>
                        <h2>{dog.name}</h2> 
                        <p>Temperament: {dog?.createdInDb === true ? dog?.temper.map(t => t.name) : dogTempers}</p>
                        <div>
                            <p>Weight: {dog?.weightMin}kg - {dog.weightMax}kg</p>
                        </div>
                        <div>
                            <p>Height: {dog?.heightMin}cm - {dog.heightMax}cm</p>
                        </div>
                        <div>
                            <p>Life Span: {dog?.life_span}</p>
                        </div>
                        <div>
                            <p>Origin: {dog?.origin ? dog.origin : 'not registered'}</p>
                        </div>
                    </div>
                </div>               
                    <div className={style.returnBtnDiv}> <Link to="/home"><button className={style.returnButton}>Return</button></Link></div>
            </div>
            : <Loading/>}
            
        </div>
    )
}

export default DogDetail;