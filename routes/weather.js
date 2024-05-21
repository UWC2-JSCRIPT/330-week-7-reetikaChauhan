const { Router } = require("express");
const router = Router();
const Weather =  require('../daos/weather');

router.get("/", (req, res, next) => {
        res.render('weather');
});

router.get("/location", async(req, res, next) => {
    if(req.query.name === '' || !req.query){
        res.status(302).redirect('/weather')
    }else{
        const location = req.query.name
        const resp = await Weather.findTemperature(location)
        let resstr = ''
        if(!resp ){
            resstr = `The weather for ${location} is not available`
            res.status(404).render('result',{'location':resstr}); 
        }
        else{
            resstr = `The weather for ${location} is ${resp.temperature}`
            res.status(200).render('result',{'location':resstr});
        }
    }

});


module.exports = router;