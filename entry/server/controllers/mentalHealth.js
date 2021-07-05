const User = require('../models/User');

exports.mentalHealth = (req,res) => {
    let { email, aloneTime, tired, fidgety, aches, easyDistraction, overthinking, sadness, angry, socialContact, troubleConcentrating, troubleSleeping, otherProblems, results  } = req.body; 
    const mentalHealth = {
        aloneTime:aloneTime,
        tired:tired,
        fidgety:fidgety,
        aches:aches,
        easyDistraction:easyDistraction,
        overthinking:overthinking,
        sadness:sadness,
        angry:angry,
        socialContact:socialContact,
        troubleConcentrating:troubleConcentrating,
        troubleSleeping:troubleSleeping,
        otherProblems:otherProblems,
        results:results
    };

    User.findOneAndUpdate({ email:email },{ $set:{ mentalHealth:mentalHealth } }, { new: true })
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