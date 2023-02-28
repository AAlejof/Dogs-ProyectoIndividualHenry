import style from './DogCard.module.css'
import imageSecondary from '../../assets/Img/golden_retriever_drawing.png';
import { Link } from 'react-router-dom'

const DogCard = ({ name, temperaments, image, weightMin, weightMax, heightMin, heightMax, id }) => {
    return (

        <div className={style.dogCardContainer}>
            <h2 className={style.dogName}>{name}</h2>
            <div className={style.dogCardImg}>
                <img src={image ? image : imageSecondary} alt='Dog Profile' />
            </div>
            <div className={style.dogCardDescription}>
                <div className={style.temperaments}>
                    <p>Temperament: {temperaments && typeof temperaments[0] === 'object' ? temperaments?.map(t => (
                        t.name + ', '
                    )) : temperaments?.join(', ')}</p>
                </div>
                <div className={style.dogCardWH}>
                    <span className={style.weight}> Weight: {weightMin}kg - {weightMax}kg</span>
                    <span className={style.height}>Height: {heightMin}cm - {heightMax}cm</span>
                </div>
            </div>
            <Link className={style.detailLink} to={`/dog/${id}`}><h4>More Info</h4></Link>
        </div>

    )
}

export default DogCard