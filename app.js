/** require dependencies */
const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const routes = require('./routes/')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium"


mongoose.connect('mongodb://localhost:27017/TyroDb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
	console.log("Mongo Connection open!")
})
.catch(err=>{
	console.log("Mongo connection error")
	console.log(err)
})



//set up routes {API Endpoints}
routes(router)

//set up middlewares 
app.use(bodyParser.json())

app.use('/api', router)

const PORT = 8000 
//start server
app.listen(PORT,function(req,res){
    console.log('server running on localhost:' + PORT)
})