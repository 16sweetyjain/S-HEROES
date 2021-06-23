const User = require('../models/User');

exports.profile = (req,res) => {
    let { email, name, age, height,weight } = req.body; 
    const profile = {
        name:name,
        age:age,
        height:height,
        weight:weight
    };

    User.findOneAndUpdate({ email:email },{ $set:{ profile:profile } }, { new: true })
        .then(response => {
            console.log(response);
            res.status(200).json({
                success:'updated',
                result:response
            });
        })
        .catch(err => {
            res.status(500).json({
                errors:[{ error:err }]
            });
        });    
};