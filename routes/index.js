const express= require("express");
const router= express.Router();
const {getMethod,postMethod}= require('../controllers/controller');
router.get('/',getMethod);

router.post('/get-link',postMethod);

module.exports=  router;