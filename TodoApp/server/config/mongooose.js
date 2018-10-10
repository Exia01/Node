/* const mongoose = require("mongoose");
const path     = require("path");
const fs       = require("fs");
const models   = path.join(__dirname,"../models");

// mongoose.connect('mongodb://test:test12345@ds117773.mlab.com:17773/todo-app')
mongoose.connect('mongodb://test:test12345@ds117773.mlab.com:17773/todo-app', { useNewUrlParser: true })
fs.readdirSync( models ).forEach( function(file){
	if( file.indexOf(".js") >= 0 ){
		require( models+"/"+file );
	}	
});

 */