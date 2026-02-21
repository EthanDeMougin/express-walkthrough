const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sdev255:Ruffy246!@songdb.a9ee1rg.mongodb.net/?appName=SongDB", {useNewURLParser: true})

module.exports = mongoose;