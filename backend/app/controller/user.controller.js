const db = require ("../models");
const User = db.users;

exports.create = (req, res) => {
  console.log(req.body.firstName)
  const user = new User({
  
      firstName : req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      email: req.body.email,
      status: 500
  
  });

  user.save(user)
  .then(data => {
   res.send(data);

})
}; 