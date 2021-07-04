const User = require('../models/User');

exports.birthControl = (req,res) => {
    let { email, important, hormonalMethod, vaginalMethod, results } = req.body; 
    const birthControl = {
        important:important,
        hormonalMethod:hormonalMethod,
        vaginalMethod:vaginalMethod,
        results:results
    };

    User.findOneAndUpdate({ email:email },{ $set:{ birthControl: birthControl} }, { new: true })
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