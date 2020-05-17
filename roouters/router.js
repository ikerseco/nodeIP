const express = require('express')
const router = express.Router();
const ipCRT = require('../controlers/ipCTR.js')



//urlgenere
router.get("/URLsource/:data",ipCRT.GenUrl)






module.exports = router