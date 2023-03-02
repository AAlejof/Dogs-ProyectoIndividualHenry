import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './CreateDog.module.css';
import image from '../../assets/Img/spaniel_pencil_drawing.jpeg';
import { useHistory } from 'react-router-dom';
import { getTemperaments, createDog } from '../../redux/actions';
import validate from './Validation';



const CreateDog = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector((state) => state.temperaments);
    const [input, setInput] = useState({
        name: '',
        heightMin: 0,
        heightMax: 0,
        weightMin: 0,
        weightMax: 0,
        life_span: '',
        image: '',
        origin: '',
        temperaments: []
    });
    console.log(input)
    const [errors, setErrors] = useState({
        name: '',
        heightMin: 0,
        heightMax: 0,
        weightMin: 0,
        weightMax: 0,
        life_span: '',
        image: '',
        origin: '',
        temperaments: ""
    });
    console.log(errors)

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!errors.name && !errors.weightMin && !errors.weightMax && !errors.heightMin && !errors.heightMax && !errors.origin && input.name !== "") {
            dispatch(createDog(input))
            alert('Dog Created')
            history.push('/home')
        }
        else alert('Missing info')
    }

    function handleTemperaments(e) {
        setInput({
            ...input,
            temperaments: input.temperaments.includes(e.target.value) ?
                input.temperaments :
                [...input.temperaments, e.target.value]
        })
    }

    function handleDelete(e) {
        e.preventDefault()
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => temp !== e.target.id)
        })
    };

    return (
        <>

            <h2 className={style.createH2}>Add a dog breed</h2>
            <span className={style.createText}><p>Did we miss a breed? Add it in the form!</p></span>

            <div className={style.createContainer}>
                <div className={style.createImg}>
                    <img src={image} alt='Create Dog' />
                </div>
                <div className={style.createForm}>
                    <form onSubmit={e => handleSubmit(e)}>

                        <label>Breed Name</label>
                        <input
                            type='text'
                            name='name'
                            value={input.name}
                            onChange={e => handleChange(e)}
                        />
                        {errors.name && (
                            <p className={style.Error}>{errors.name}</p>
                        )}

                        <label>Temperaments</label>
                        <select onChange={handleTemperaments}>
                            <option selected disabled />
                            {temperaments?.map((temp) => (
                                <option value={temp.name}>
                                    {temp.name}
                                </option>
                            ))}

                            {errors.temperaments && (
                                <p className={style.Error}>{errors.temperaments}</p>
                            )}
                        </select>
                        <ul>
                            {input.temperaments.map(temp => (
                                <li key={temp} >
                                    {temp}
                                    <button id={temp} type='button' onClick={e => handleDelete(e)} >X</button>
                                </li>
                            ))}
                        </ul>

                        <label>Image</label>
                        <input
                            type='text'
                            name='image'
                            placeholder='Url...'
                            value={input.image}
                            onChange={e => handleChange(e)}
                        />
                        {errors.image && (
                            <p className={style.Error}>{errors.image}</p>
                        )}

                        <div className={style.SmallInputContainer}>
                            <div className={style.CollumnInputs}>
                                <label>Min Height</label>
                                <input
                                    type='number'
                                    name='heightMin'
                                    value={input.heightMin}
                                    onChange={e => handleChange(e)}
                                />
                                {typeof errors.heightMin === "string" && (
                                    <p className={style.Error}>{errors.heightMin}</p>
                                )}
                            </div>
                            <div className={style.CollumnInputs}>
                                <label>Max Height</label>
                                <input
                                    type='number'
                                    name='heightMax'
                                    value={input.heightMax}
                                    onChange={e => handleChange(e)}
                                />
                                {typeof errors.heightMax === "string" && (
                                    <p className={style.Error}>{errors.heightMax}</p>
                                )}
                            </div>
                        </div>

                        <div className={style.SmallInputContainer}>
                            <div className={style.CollumnInputs}>
                                <label>Min Weight</label>
                                <input
                                    type='number'
                                    name='weightMin'
                                    value={input.weightMin}
                                    onChange={e => handleChange(e)}
                                />
                                {typeof errors.weightMin === "string" && (
                                    <p className={style.Error}>{errors.weightMin}</p>
                                )}
                            </div>
                            <div className={style.CollumnInputs}>
                                <label>Max weight</label>
                                <input
                                    type='number'
                                    name='weightMax'
                                    value={input.weightMax}
                                    onChange={e => handleChange(e)}
                                />
                                {typeof errors.weightMax === "string" && (
                                    <p className={style.Error}>{errors.weightMax}</p>
                                )}
                            </div>
                        </div>
                        <label>Origin</label>
                        <input
                            type='text'
                            name='origin'
                            placeholder=' eg: region or country'
                            onChange={e => handleChange(e)}
                        />
                        {errors.origin && (
                            <p className={style.Error}>{errors.origin}</p>
                        )}
                        <label>Life Span</label>
                        <input
                            type='text'
                            name='life_span'
                            placeholder=' eg: 11 - 15 years'
                            onChange={e => handleChange(e)}
                        />
                        {errors.life_span && (
                            <p className={style.Error}>{errors.life_span}</p>
                        )}

                        <div className={style.FormBtns}>
                            <button type='submit'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateDog;