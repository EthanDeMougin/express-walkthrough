//Setup/ similar to html
const express = require("express")
//To host front end and back end on the same device
var cors = require('cors')
//Activates app variable 
const app = express()
app.use(cors())
const router = express.Router()


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

//
router.get("/songs", function(req,res){
    const songs = [
        {    
            title: "Uptown Funk",
            artist: "Bruno Mars",
            popularity: 10,
            genre: ["funk", "boogie"]
        },
        {
            title: "Uptown Funk",
            artist: "Bruno Mars",
            popularity: 10,
            genre: ["funk", "boogie"]
        }
    ];
    res.json(songs)
})

//All requests that usually use an api start with /api... so the url would be http://localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)