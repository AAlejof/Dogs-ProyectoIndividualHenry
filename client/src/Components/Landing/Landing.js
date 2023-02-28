import style from './Landing.module.css'
import { Link } from 'react-router-dom'
import image from '../../assets/Img/golden_retriever_drawing.png'
import logo from '../../assets/Img/paw_logo.png'

const Landing = () => {
    return (
        <div className={style.landingContainer}>
            <div className={style.landingImg}>
                <img src={image} alt='logo' />
            </div>
            <div className={style.landingDescription}>
                <img src={logo} alt='logo' />
                <h2>Woofipedia</h2>
                <h4>Learn all you can about our furry friends!</h4>
                <button className={style.landingButton}>
                    <Link to='home'>ENTER</Link>
                </button>
            </div>
        </div>
    )
}

export default Landing;