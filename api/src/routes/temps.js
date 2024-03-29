const express = require("express");
const {API_KEY} = process.env
const temps = express();
const {Temper} = require('../db')
const axios = require('axios')

temps.get('/', async (req, res) =>{
    try{        
        let dogsTempsApi = (await axios (`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data.map(el => el.temperament).toString();//me trae un string con todos los temp separados por comas
        dogsTempsApi = await dogsTempsApi.split(',');
        const tempsWithSpace = await dogsTempsApi.map(el => {
            if (el[0] == ' ') {
                return el.split('');
            }
            return el;
        });
        const tempsWithoutSpace = await tempsWithSpace.map(el => {
            if (Array.isArray(el)) {
                el.shift();
                return el.join('');
            }
            return el;
        })
        
        await tempsWithoutSpace.forEach(el => {
            if (el != '') {
                Temper.findOrCreate({
                    where: {
                        name: el
                    },
                });
            }
        });
        const allTemps = await Temper.findAll();
        res.status(200).send(allTemps);

    }catch(error){
        res.status(400).send({error: error.message})
    }
    });

module.exports = temps;