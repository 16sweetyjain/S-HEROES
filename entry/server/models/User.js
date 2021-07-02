const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthControl :{},
    periodTracker:{},
    mentalHealth:{},
    reproductiveHealth:{},
    profile:{},
    menstrualCondition:{}
},{
    timestamps: true,
    collection: 'users'
});
module.exports = mongoose.model('User', userSchema);