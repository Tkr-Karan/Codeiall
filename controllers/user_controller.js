// importing the User data from the models
const User = require('../models/user');


module.exports.profile = function(req, res) {
    
    return res.render('user',{
        title: "user Page"
    });
}


// render the Sigin page
module.exports.signIn = function(req, res) {

    return res.render('user_sign_in', {
        title: "Codiall | Signin"
    })
}


// render the Sign Up Page
module.exports.signUp = function(req, res) {
    return res.render('user_sign_up', {
        title: "Codeiall | SignUp"
    })
}

//get the data from the form.
module.exports.create = function(req, res) {
    // here we are checking the credentials and adding to database.

    if(req.body.password != req.body.confirm_password){
        console.log("password doesn't match");
        return res.redirect('back');
    }

    
    // chceking the user email using the findOne function
    User.findOne({email: req.body.email}, function(err, user) {
        if(err) {
            console.log("there is an error to find the user.");
            return;
        }

        if(!user){
            User.create(req.body, function(err, user) {
                if(err) {
                    console.log("error in creating user while siging up", err);
                    return;
                }
                return res.redirect('/user/sign-in');
            })
        }
        else{
            console.log("user added successfully :)")
            return res.redirect('back');
        }
    });
}

// sign in and creating the session for the user.
module.exports.createSession = function(req, res) {
    //steps to authentication
    // find the user
    User.findOne({email: req.body.email}, function(err, user) {
        if(err) {
            console.log("there is an error on finding the user in the sign in", err);
            return;
        }
        // handle user found
        if(user){

            //handle password if doesn't match
            if(user.password != req.body.password){
                console.log("not matched");
                return res.redirect('back');
            }

            //handle session creation
            console.log("handlig session and founded")
            res.cookie('user_id', user.id);
            // console.log("user is is: ", user.id);
            return res.redirect('/user/profile');
        }
        else{
            console.log("not founded");
            console.log("user is is: ", req.body.name);
            // handle user not found
            return res.redirect('back');
        }
        
    });   

}