const User = require('../models/User');

exports.profile = (req,res) => {
    let { email, name, age, height,weight } = req.body; 
    let errors = [];
    if (!name) {
        errors.push({ error: 'Name required' });
    }
    if (!age) {
        errors.push({ error: 'Age required' });
    }
    if (!height) {
        errors.push({ error: 'Height required ' });
    }
    if (!weight) {
        errors.push({ error: 'Weight required ' });
    }
    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }
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
                success:' profile updated',
                result:response
            });
        })
        .catch(err => {
            res.status(500).json({
                errors:[{ error:err }]
            });
        });    
};