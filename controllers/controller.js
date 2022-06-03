const getMethod= (req,res)=>{
    res.render("index.ejs",{url:'https://www.youtube.com/embed/fPX0C-g5xpU'});
}

const postMethod=(req,res)=>{
    
    str= req.body.url;
    str= str.split('=');
    x=str[1];
    console.log(x);
    res.render("index.ejs",{url:`https://www.youtube.com/embed/${x}`});
}

module.exports={getMethod,postMethod};