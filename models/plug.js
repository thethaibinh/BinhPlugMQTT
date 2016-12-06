var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugSchema = new Schema({
  name:  String,
  status: String  
});

var plugSchema = mongoose.model("plugs", plugSchema);
module.exports = plugSchema;