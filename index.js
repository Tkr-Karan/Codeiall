const express = require('express');
const app = express();

const path = require('path');

const port = 1111;



// setting up the layouts
const expressLayouts = require('express-ejs-layouts');

// Creating layouts middle-ware.
app.use(expressLayouts);

// adding assets to the folder -> static files
app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes'));


// setting up the view engine using use method for work as a middle ware
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`there is some error please connect with your developer: ${err}`);
    }

    console.log(`your serveris running FINE ${port}`);
});