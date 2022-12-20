const express = require('express');
const app = express();

const port = 1111;


app.listen(port, function(err){
    if(err){
        console.log(`there is some error please connect with your developer: ${err}`);
    }

    console.log(`your serveris running FINE ${port}`);
});