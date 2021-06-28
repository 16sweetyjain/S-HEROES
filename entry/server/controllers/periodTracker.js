const User = require('../models/User');

exports.periodTracker = (req,res) => {
    let { email, menstrualCycleLength, menstrualLength, lastMenstrualDate, expectedOvulationDate, expectedMenstrualDate, expectedFertileDays } = req.body; 
    const periodTracker = {
        menstrualCycleLength:menstrualCycleLength,
        menstrualLength:menstrualLength,
        lastMenstrualDate:lastMenstrualDate,
        expectedOvulationDate:expectedOvulationDate,
        expectedMenstrualDate:expectedMenstrualDate,
        expectedFertileDays:expectedFertileDays
    };
    console.log(periodTracker);

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