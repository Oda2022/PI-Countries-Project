const axios = require('axios');
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
};



