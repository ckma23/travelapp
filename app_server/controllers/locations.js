//get the page
module.exports.homelist = function (req,res){
  res.render('location-list',{title:"Home"});
};

// get the page
module.exports.locationInfo = function (req,res){
  res.render('location-info',{title:"Location Info"});
};

// get the page
module.exports.addReview = function (req,res){
  res.render('location-review-form',{title:"Add Review"})
}
