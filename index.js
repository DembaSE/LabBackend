const express= require('express')
const path=require('path')
const app=express()
const PORT=process.env.PORT || 5000

var date=" 3/6/2022"
var time="2:17pm"
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const labelName="Im coming from the back"
    const developper="Demba Kane"
    res.render('index',{labelName:labelName, developper:developper,date:date,time:time})
})

app.get('/newPage.ejs',(req,res)=>{
    res.render('newPage')
})

app.get('/page/:id', function(req, res) {
    const id=req.params.id
  res.send(`You asked for page number  ${id}` );
});

app.listen(PORT,()=>{
    console.log("the server is running on the port 5000")
})
