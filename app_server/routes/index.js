var express = require('express');
var router = express.Router();
//call the controller main now and link the router to the countroller
var ctrlMain = require('../controllers/main')

//moved the controller out of the routes and into controller main.js
// move this out of the router.get and create a separte function
//var homepageController = function(req,res){
//  res.render('index',{title:'TravelApp'});
//}

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});


//tell the router to get the "base link (/) and then apply the callback function"
// the callback function is now ctrlMain and specifically the index functino.
/* GET home page. */
router.get ('/', ctrlMain.index);

module.exports = router;
