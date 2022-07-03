const mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://EdouardROUSSEL:3iE0DoUomLswhzgV@cluster0.uvhwb.mongodb.net/Ticktak?retryWrites=true&w=majority',
   options,
   function(err) {
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info('*** Database Ticketac connection : Success ***');
    }
   }
);

module.exports = mongoose