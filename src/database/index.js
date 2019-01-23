
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/testealteracao');
mongoose.Promise = global.Promise;

module.exports = mongoose;

