//Setup/ similar to html
const express = require("express")
//To host front end and back end on the same device
//Activates app variable 
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const Song = require("./models/songs");
app.use(bodyParser.json())

//grab all the songs in a database
router.get("/songs", async (req,res) => {
    try {
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch(err) {
        console.log(err)
        res.status(500).send(err)
    }

    //to find all songs in a database, we use the find method on the model
    //Song.find(query, function(err,songs){
        //if(err){
            //res.status(500).send(err)}
        //else{
            //res.json(songs)
        //}
    //})
})

//Start the web server... app.listen(portnumber, function)
//app.listen(3000, function(){
    //console.log("Listening to port 3000")
//})

//Making an api using routes
//Routes are used to handle browser requests, they look like urls
//The difference is when a browser requests a route, it is dynamcially handled using a function.

//GET or regular request when someone goes to http://localhost:3000/hello
//app.get("/hello", function(req,res){
    //When using a function in a route, we almost always have a parameter or handle a response and request.
    //res.send("<h1>Hello Express</h1>")
//})

//app.get("/goodbye", function(req,res){
    //res.send("<h1>Goodbye, Express</h1>")
//})



//All requests that usually use an api start with /api... so the url would be http://localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)