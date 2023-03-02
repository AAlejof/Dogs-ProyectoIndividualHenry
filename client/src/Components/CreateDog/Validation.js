const validate = (input) => {
    
    let errors = {};
    if (!input.name) errors.name = 'Name is required'
    if (input.name && input.name.length < 3) errors.name = 'Name must contain between 3 and 30 characters'
    if (input.name && input.name.length > 30) errors.name = 'Name must contain between 3 and 30 characters'
    if (input.name && !/^[a-zA-Z\s]+$/.test(input.name)) errors.name = 'Invalid name, must only contain letters'
    if (!input.temperaments.length) errors.temperaments = 'Choose a temperament'
    if (input.temperaments.length > 6) errors.temperaments = `You can't select more than 7 temperaments`
    if (input.weightMin < 1) errors.weightMin = 'Value must be a positive number'
    if (input.weightMin > 70) errors.weightMin = 'Min value must be less than 70 kg'
    if (parseInt(input.weightMin) > parseInt(input.weightMax)) errors.weightMin = 'Min value must be less than Max value'
    if (input.weightMax < 1) errors.weightMax = 'Value must be a positive number'
    if (input.weightMax > 100) errors.weightMax = 'Max value must be less than 100 kg'
    if (parseInt(input.weightMax) < parseInt(input.weightMin)) errors.weightMax = 'Max value must be higher than Min value'
    if (input.heightMin < 1) errors.heightMin = 'Value must be a positive number'
    if (input.heightMin > 100) errors.heightMin = 'Min value must be less than 100 kg'
    if (parseInt(input.heightMin) > parseInt(input.heightMax)) errors.heightMin = 'Min value must be less than Max value'
    if (input.heightMax < 1) errors.heightMax = 'Value must be a positive number'
    if (input.heightMax > 150) errors.heightMax = 'Max value must be less than 150 kg'
    if (parseInt(input.heightMax) < parseInt(input.heightMin)) errors.heightMax = 'Max value must be higher than Min value'
    if (input.life_span < '1') errors.life_span = 'The age must be a positive number '
    if (input.life_span > '80') errors.life_span = 'the value must be less than 80 years'
    if (!input.name) errors.name = 'Name is required'
    if (input.origin && input.origin.length < 3) errors.origin = 'origin must contain between 3 and 30 characters'
    if (input.origin && input.origin.length > 30) errors.origin = 'origin must contain between 3 and 30 characters'
    if (input.origin && !/^[a-zA-Z\s]+$/.test(input.origin)) errors.origin = 'Invalid origin, must only contain letters'
    return errors
}

export default validate;