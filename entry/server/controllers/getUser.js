const User = require('../models/User');

exports.getUser = (req,res) => {
    User.find({email:req.query.email})
        .then(response => {
            //console.log(response);
            res.status(200).json({
                result:response
            });
        })
        .catch(err => {
            res.status(500).json({
                errors:[{ error:err }]
            });
        });    
};