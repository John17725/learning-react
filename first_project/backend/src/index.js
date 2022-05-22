const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database');


app.set('Port',4000);

app.use(morgan('dev'))

// app.use(bodyparser.urlencoded({
//     extended: true
// }));

// app.use(bodyparser.json());

// Routing
app.use('/api/', require('./routes/test.route'))


// Launch Server

app.listen(app.get('Port'), () => {
    console.log('Server listening on port://', app.get('Port'))
});

