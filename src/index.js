const express= require('express');
const bodyParser= require('body-parser');   
const mongoose= require('mongoose');
const route= require('./route/route')

const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://soniyayy:Soniya123@cluster0.ltjt0u7.mongodb.net/group7Database")
.then(function(){
    console.log("MongoDB is connected")
})
.catch(function(errors){
    console.log({errors: errors.message})
})


app.use('/', route);

app.listen(3000,()=>{console.log("Express app running on port" + 3000  )})
