const{Router}=require('express');
const {getAPIcountry} = require('../controllers/getAPIcountry');
const {countryNames, countryIds} = require('../controllers/countrycontroller')

const countryRouter = Router();

countryRouter.get('/', async(req, res)=>{
    const{name} = req.query;
    try{
        if(name){
            
            const queryCountry= await countryNames(name);
            res.status(200).json(queryCountry)
        }else{
            const countriesList = await getAPIcountry();
            res.status(200).json(countriesList);
        }
    }catch(err){
        res.status(404).json({error: err.message});
    }
})

countryRouter.get('/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const paramscountry = await countryIds(id);
        res.status(200).json(paramscountry);
    }catch(err){
        res.status(404).json({error: err.message});
    }
})

module.exports = countryRouter;