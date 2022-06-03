const express= require("express");
const router= express.Router();

router.get('/',(req,res)=>{
    res.render("index.ejs",{url:'https://www.youtube.com/embed/fPX0C-g5xpU'});
});

router.post('/get-link',(req,res)=>{
    
    str= req.body.url;
    str= str.split('=');
    x=str[1];
    console.log(x);
    res.render("index.ejs",{url:`https://www.youtube.com/embed/${x}`});
})

module.exports=  router;