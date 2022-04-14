var mongoose = require('mongoose')

var usersSchema = mongoose.Schema({
    lasttrips: [{type: mongoose.Schema.Types.ObjectId, ref: 'journeys'}],
    lastname : String,
    firstname :  String,
    mail: String,
    password: String, 
    
  });

  var usersModel = mongoose.model('users', usersSchema);

  module.exports = usersModel