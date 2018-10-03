let mongoose = require("mongoose");

/* Create a schema based of the import */
let TodoSchema = new mongoose.Schema({
	item:{type:String,required:true,minlength:2,maxlength:64}
});

/* todo is based off of the TaskSchema */
mongoose.model("Todo",TodoSchema);