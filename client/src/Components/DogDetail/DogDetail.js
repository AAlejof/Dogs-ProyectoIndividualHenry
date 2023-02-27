import style from './DogDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetail } from '../../redux/actions';
import Loading from '../Loading/Loading'

const DogDetail = (props) =>{
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogDetail(props.match.params.id));        
    },[dispatch])

    const selectedDog = useSelector((state) => state.dogs);
    const dog = selectedDog[0]
    const dogTempers = dog !== undefined && 'temper' in dog ? dog.temper.join(', ') : '';
    return(
        
        <div>
            {selectedDog.length ?
            <div className={style.DogDetailContainer}>
                <h1 className={style.h1Detail}>Dog detail</h1>
                <div className={style.DogDetail}>
                    <div> 
                        <img src={dog.image} alt='Dog Profile'/>
                    </div>
                    <div>
                        <h2>{dog.name}</h2> 
                        <p>{dog.createdInDb === true ? dog.temper.map(t => t.name) : dogTempers}</p>
                        <div>
                            <p>Weight: {dog.weightMin}kg - {dog.weightMax}kg</p>
                        </div>
                        <div>
                            <p>Height: {dog.heightMin}cm - {dog.heightMax}cm</p>
                        </div>
                        <div>
                            <p>Life Span: {dog.life_span}</p>
                        </div>
                        <div>
                            <p>Origin: {dog.origin}</p>
                        </div>
                    </div>
                </div>               
            </div>
            : <Loading/>}
            
        </div>
    )
}

export default DogDetail;