const express = require('express');

// importing the cookie parser to our project.
const cookieParser = require('cookie-parser');

const app = express();

const path = require('path');

const port = 1111;

// connecting the db
const db = require('./config/mongoose');


// Used for sessoin cookies
// adding express session
const session = require('express-session');
// adding Passport library
const passport = require('passport');

// adding Passport Local Startegy
const passportLocal = require('./config/passport-local-strategy');

// using the urlEncoded middleware
app.use(express.urlencoded());

// using cookie parser moiddleware.
app.use(cookieParser());


// setting up the layouts
const expressLayouts = require('express-ejs-layouts');

// Creating layouts middle-ware.
app.use(expressLayouts);

// extracting style and scripts from subpages to the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// adding assets to the folder -> static files
app.use(express.static('./assets'));




// setting up the view engine using use method for work as a middle ware
app.set('view engine', 'ejs');
app.set('views', './views');

//using the express session after the views.

app.use(session({

    name: 'codeiall',
    secret: "ithassomething",
    saveUninitialized: false, //if the identity is not established so is that important to need some extra data: no -> so the value is false
    resave: false, // if the identity is established or the session cookies is store, then we wanna rewrite again and again -> So resave help us to prevernting from that.
    cookie: {
        maxAge: (1000*60*100)
    }
}));

app.use(passport.initialize());

app.use(passport.session());


// checking wether the sessioin cookies is present or not
app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));



app.listen(port, function(err){
    if(err){
        console.log(`there is some error please connect with your developer: ${err}`);
    }
    
    console.log(`your server is running FINE ${port}`);
});