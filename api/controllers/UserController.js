/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
      User.find().exec(function(err, user){
         return res.json({err: err, user: user});
      });
   }
};

