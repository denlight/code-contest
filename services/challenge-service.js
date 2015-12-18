var Challenge = require('../models/challenge').Challenge;

exports.addChallenge = function(challenge, next) {
    var newChallenge = new Challenge({
      name : challenge.name, 
      slug : challenge.slug, 
      description : challenge.description,
      languages : challenge.languages,
    });
    
    newChallenge.save(function(err,challenge){
      if(err,null) {
        return next(err);
      }
      return next(null,challenge);
    });
};

exports.getChallenges = function(next) {

    Challenge.find({},function(err, data){
      if(err) {
        return next(err,null);
      }
      return next(null, data);
    });
};

exports.deleteChallenge = function(data,next) {
  Challenge.remove({slug:data.challenge},function(err){
      if(err) {
        return next(err);
      }
      return next(null);
    });
}
exports.findChallenge = function(name,next) {
  Challenge.findOne({name:name}, function(err, challenge){
    next(err,challenge);
  });
};