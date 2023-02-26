import style from './DogCard.module.css'
import imageSecondary from '../Img/golden_retriever_drawing.png'
import { Link } from 'react-router-dom'

const DogCard = ({ name, temperaments, image, weightMin, weightMax, heightMin, heightMax, id }) => {
    return (

        <div className={style.DogCardContainer}>
            <h2 className={style.DogName}>{name}</h2>
            <div className={style.DogCardImg}>
                <img src={image ? image : imageSecondary} alt='Dog Profile' />
            </div>
            <div className={style.DogCardDescription}>
                <p>{temperaments && typeof temperaments[0] === 'object' ? temperaments?.map(t => (
                    t.name + ', '
                )) : temperaments?.join(', ')}</p>
                <div className={style.DogCardWeight}>
                    <span className={style.WeightLeft}> Weight: {weightMin}kg - {weightMax}kg</span>
                    <span className={style.WeightRight}>Height: {heightMin}cm - {heightMax}cm</span>
                </div>
            </div>
            <Link to={`/dog/${id}`}><h4>More Info</h4></Link>
        </div>

    )
}

export default DogCard