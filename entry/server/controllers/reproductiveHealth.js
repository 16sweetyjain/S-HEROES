const User = require('../models/User');

exports.reproductiveHealth = (req,res) => {
    let { email, sexLife, menstrualCondition , symptoms, densityOfBodyHairs, exercise, junkConsumption, smoking, drugUsage} = req.body; 
    const reproductiveHealth = {
        sexLife:sexLife,
        menstrualCondition:menstrualCondition,
        symptoms:symptoms,
        densityOfBodyHairs:densityOfBodyHairs,
        exercise:exercise,
        junkConsumption:junkConsumption,
        smoking:smoking,
        drugUsage:drugUsage
    };

    User.findOneAndUpdate({ email:email },{ $set:{ reproductiveHealth:reproductiveHealth} }, { new: true })
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