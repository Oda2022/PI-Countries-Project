const {Router} = require('express');
const {createActivity, listActivities} = require('../controllers/activitycontroller');

const activityRouter = Router();

activityRouter.post('/', async (req, res)=>{
    try{
        const {name, hard, season, countries} = req.body;
        const bodyactivity= await createActivity(name, hard, season, countries);
        res.status(200).json(bodyactivity);
    }catch(err){
        res.status(404).json({error: err.message});
    }
});

activityRouter.get('/', async (req, res)=>{
    try{
        const activityGet = await listActivities();
        res.status(200).json(activityGet);

    }catch(err){
        res.status(404).json({error: err.message});
    }
});

module.exports = activityRouter;