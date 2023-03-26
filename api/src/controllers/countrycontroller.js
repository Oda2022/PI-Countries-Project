const {Op} = require('sequelize');
const {Activity,Country}=require('../db');

const countryNames = async (name)=>{
    console.log(name)
    let countryName = await Country.findAll({
        where:{
            name: {[Op.iLike]:`%${name}%`} //case insensitive only PG
        }
    });

    if(!countryName.length){
        throw Error('not exist country with similar name');
    }

    return countryName;
};

const countryIds = async (id)=>{
    let countryId = await Country.findByPk(id,{
        include: {
            model: Activity,
            through: {
                attributes: [],
            },
        },
    });

    if(!countryId){
        throw Error(`not exist country code: ${id}`);
    }

    return countryId;
}

module.exports ={
    countryNames,
    countryIds
}