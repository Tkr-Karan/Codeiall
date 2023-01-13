// importing the passport using require
const passport = require('passport');

//creating passport strategy variable
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


// creating the passport middleware

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},// done is the callback function
// find the user and estabish the identity
function (email, password,done) 
    {  
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("error in finding user --> Passport");
                return done(err);
            }

            if (!user || user.password != password) {
                console.log("Invalid Username/Password");
                return done(null, false);
            }

            done(null, user);
        });
    }
));


// passport.use(new LocalStrategy({
//     usernameField:'email'
// },function(email,password,done){
//     User.findOne({email:email},function(err,user){
//         if(err){
//             console.log(err);
//             return done(err);
//         }
//         if(!user || user.password != password){
//             console.log("Invaild usename or password");
//             return done(null,false);
//         }
//         return done(null,user);
//     })
// }))

// passport.use(new LocalStrategy({
//     usernameField: 'email'
//     },
//     // here we using the callback function
//     function(email, password, done){  // done is the callback function
//         // find the user and estabish the identity
//         User.findOne({email: email}, function(err, user){
//             if(err) {
//                 console.log("error in finding user --> Passport");
//                 return done(err);
//             }

//             if(!user || user.password != password){
//                 console.log("Invalid Username/Password");
//                 return done(null, false);
//             }

//             return done(null, user);
//         })
//     }
// ));

// serializing the user to decide which key is kept in the cookies.
passport.serializeUser(function(user, done){
    console.log("You are here");
    return done(null, user.id);
});



// deserializing the user from the key in the cookies 
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("there is an errror --> Passport");
            return done(err);
        }

        return done(null, user);
    });  
});

// here we are exporting the module
module.exports = passport;