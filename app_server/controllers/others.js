// this is a controller named about that once the route makes a request the about controller will render the "view"
// Get the about page
module.exports.about = function(req,res){
  res.render('generic-text', {title:"About"});
}
