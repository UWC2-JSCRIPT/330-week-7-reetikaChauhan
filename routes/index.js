const { Router } = require('express');
const router = Router();
// router.get("/", (req, res, next) => {
//     //const timeStamp = new Date().toTimeString();
//     res.render('index', {
//         items: ['item one', 'other', 'new item']
//     }); 
// });
router.use("/landing", require('./landing'));
router.use("/weather", require('./weather'));
module.exports = router;