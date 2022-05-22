const mongoose = require('mongoose');

URI = ('mongodb://192.168.0.12/ensayo');

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Success connect DB'))
    .catch(error => console.log(error))

module.exports = mongoose;