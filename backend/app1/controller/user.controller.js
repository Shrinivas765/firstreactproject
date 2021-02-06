const db = require("./app1/models1");
const User =db.users;

exports.create=(req,res)=>{
const user =({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    city : req.body.city,
    Address : req.body.Address,
    email : req.body.email,
    Mobile_no : req.body.Mobile_no,
    status: 500
});
        user.save(user)
        .then((data)=>{
            res.send(data);
        })
};