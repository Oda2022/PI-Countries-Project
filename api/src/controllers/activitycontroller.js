const{Activity, Country} = require('../db');

const createActivity = async (
    name,
    hard,
    season,
    countries,
) => {
    if (!name|| !hard || !season || !countries.length)
    throw Error ('Input all data')

    if( hard > 5 || hard < 1 )
    throw Error ('Hard is out of range')

    if(season !== 'summer' && season !== 'winter' && season !== 'autumn' && season !== 'spring')
    throw Error ('Season invalid')

    if(!countries.length)
    throw Error ('Must have at least one country')

    try{

    
        const [activity, created] = await Activity.findOrCreate({
            where:{name: name},
            defaults:{
                hard,
                season,

            }
        });

        await activity.addCountries(countries);
        let response={}
        created ?   (response={
                        message: `The ${name} activity has been created`,
                        ...activity.dataValues
                    })
                :   (response={
                    message: `The ${name} activity exists`
                    })
        return response;
    }catch(err){
        return err;
    }
};

const listActivities = async()=>{
    try{
        let getActivities = await Activity.findAll({
            include:[
                {
                    model: Country,
                    attributes:['name']
                }
            ]
        })

        return getActivities;
    } catch(err){
        return err; 
    }
    
}
module.exports={
    createActivity,
    listActivities
}