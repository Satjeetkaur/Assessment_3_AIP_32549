/**
 * UsercomplaintController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */



module.exports = {

 
  create: function(req, res, next) {

    SurveyResponse.create(req.params.all(), function userCreated(err, user) {

     if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        // If error redirect back to sign-up page
        return res.redirect('/SurveyQuestions/index');
      }

      // Log user in
      req.session.authenticated = true;
      
      req.session.User = user;

      req.session.User.admin = 1;

      sails.log('Wow, there are %d users named Finn.  Check it out:', req.session.authenticated);
      //res.redirect('/User/Success/'+ req.session.User);
     res.redirect('/Surveys/ViewSurvey/');
  
    });
  },

  ViewResponse: function(req, res, next) {
      SurveyResponse.count({Answer1:'Agree'}).exec(function countCB(error, surveyResponse1) {
      console.log('There are ' + surveyResponse1 + ' users called "Flynn"');
      

    });

      SurveyResponse.count({Answer5:'Agree'}).exec(function countCB(error, surveyResponse2) {
      console.log('There are ' + surveyResponse2 + ' users called "Flynn"');
      
  
    });
      
  }
}
