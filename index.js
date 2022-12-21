const express = require('express');
const app = express();

const port = 1111;

// use express router
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log(`there is some error please connect with your developer: ${err}`);
    }

    console.log(`your serveris running FINE ${port}`);
});