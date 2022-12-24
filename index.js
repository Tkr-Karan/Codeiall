const express = require('express');
const app = express();

const port = 1111;

// use express router
app.use('/', require('./routes/index'));

// setting up the view engine
app.use('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`there is some error please connect with your developer: ${err}`);
    }

    console.log(`your serveris running FINE ${port}`);
});