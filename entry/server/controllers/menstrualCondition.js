const User = require('../models/User');

exports.menstrualCondition = (req,res) => {
    let { email, menstruationFlow, dysmenorrheaSymptoms, mood, sex,vaginalDischarge, longerThanSevenDays,tssSymptoms, amenorrheaSymptoms, menorrhagiaSymptoms, results} = req.body; 

    const menstrualCondition = {
        menstruationFlow:menstruationFlow,
        dysmenorrheaSymptoms:dysmenorrheaSymptoms,
        mood:mood,
        sex:sex,
        vaginalDischarge:vaginalDischarge,
        longerThanSevenDays:longerThanSevenDays,
        tssSymptoms:tssSymptoms,
        amenorrheaSymptoms:amenorrheaSymptoms,
        menorrhagiaSymptoms:menorrhagiaSymptoms,
        results:results
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