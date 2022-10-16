const mongoose=require("mongoose");

const eventSchema = mongoose.Schema({
    name:String,
    details:String,
    start:String,
    end:String,
    color:String

});

module.exports = mongoose.model("Events",eventSchema);