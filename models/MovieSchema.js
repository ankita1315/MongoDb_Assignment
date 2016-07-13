var mongoose=require('mongoose');
var movieSchema=mongoose.Schema({
"Title":String ,
"Year":String,
"Rated":String,
"Released":String,
"Runtime":String,
"Genre":String,
"Writer":String,
"Actors":String,
"Language":String,
"Country":String,
"Director":String,
"Awards":String,
"Type":String,
"Response":String});
module.exports=mongoose.model('movie1',movieSchema);
