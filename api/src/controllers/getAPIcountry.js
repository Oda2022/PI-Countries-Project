const axios = require('axios');
<<<<<<< HEAD
const {Country}=require('../db');

let ENDPOINT = "https://restcountries.com/v3/all";

async function getAPIcountry(){

   const response = await axios.get(ENDPOINT);
      const dataApicountry = response.data.map((country)=>{
         const countrymodel= {
          id: country.cca3,
          name: country.name.common,
          flags: country.flags[0],
          continents:country.continents[0],
          capital: country.capital? country.capital[0]: 'not exists capital',
          population: country.population
         };
         // console.log(countrymodel) //para conocer que data me responde la API
         return countrymodel;
        
      });
      try{
         
         let putDBcountry = await Country.findAll();
         if(!putDBcountry.length){
            await Country.bulkCreate(dataApicountry);
         }
         return dataApicountry;
         
      } catch(err){
         return err;
      }
   };



module.exports = {
   getAPIcountry
=======
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
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
};



<<<<<<< HEAD
=======
module.exports={
    getAPIcountry,
    putDBcountry,
}
>>>>>>> a5fd5c261b01ee910c77ad3bf9fb91cde5036aa6
