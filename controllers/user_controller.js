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