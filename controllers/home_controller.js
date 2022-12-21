module.exports.home = function(req, res) {
    return res.end("<h1>Our codeial home page is up!!</h1>");
};

// module.exports.actionName = funciton(req, res) {return res.end("what message you wanna display on a web page.")}

module.exports.login = function(req, res) {
    return res.end("<h3> Currently login page is under maintainance please visit after some time. Sorry, for the inconvinience!!! </h3>")
}