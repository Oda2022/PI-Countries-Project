const axios = require('axios');
const {Sequelize, Op} = require('sequelize');
const {Activity, Country} = require('../db');

let ENDPOINT='https://restcountries.com/v3/all';

async function getAPIcountry(){
    try{
        const response = await axios.get(ENDPOINT);
        const dataApicountry = response.data.map((country)=>{
            return{
                id:country.cca3,
                name:country.name.common,
                flags:country.flags[0],
                continents:country.continents[0],
                capital:country.capital ? country.capital[0]:'not exists capital',
                population:country.population,
            };
        });
    //   console.log(dataApicountry)
        return dataApicountry

    }catch(err){
        return err;
    }
};


async function putDBcountry(){
    try{

        let infoCountry=await Country.findAll(); //recordar que findAll devuelve un array

        if(!infoCountry.length){
            const dBcountry = await getAPIcountry();
            await Country.bulkCreate(dBcountry);
        }
        
        infoCountry = await Country.findAll({
            attributes: ['name', 'flags', 'continents', 'id', 'population'],
            include: [
                {
                    model: Activity,
                    attributes: ['name'],
                    through: { attributes: [] },
                },
            ],
        });
        return infoCountry;
        
    }catch(err){
        return err;
    }
};



module.exports={
    getAPIcountry,
    putDBcountry,
}