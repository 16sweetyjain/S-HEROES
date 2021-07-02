const User = require('../models/User');

exports.menstrualCondition = (req,res) => {
    let { email, menstruationFlow, symptoms, mood, sex, discharge, contraceptive } = req.body; 

    const menstrualCondition = {
        menstruationFlow:menstruationFlow,
        symptoms:symptoms,
        mood:mood,
        sex:sex,
        discharge:discharge,
        contraceptive:contraceptive
    };

    User.findOneAndUpdate({ email:email },{ $set:{ menstrualCondition:menstrualCondition } }, { new: true })
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