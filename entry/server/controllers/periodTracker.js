const User = require('../models/User');

exports.sendNotifications = (req,res) => {
    let { email, cycleLength, periodLength, lastDateOfPeriod } = req.body; 
    const periodTracker = {
        cycleLength:cycleLength,
        periodLength:periodLength,
        lastDateOfPeriod:lastDateOfPeriod
    };

    User.findOneAndUpdate({ email:email },{ $set:{ periodTracker:periodTracker } }, { new: true })
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