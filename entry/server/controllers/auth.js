const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
    createJWT,
} = require('../utils/auth');
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
exports.signup = (req, res) => {
    let { email, password, passwordConfirmation } = req.body;
    //console.log(req.body);
    let errors = [];
    if (!email) {
        errors.push({ error: ' Email Required' });
    }
    if (!emailRegexp.test(email)) {
        errors.push({ error: 'Email Invalid' });
    }
    if (!password) {
        errors.push({ error: 'Password Required' });
    }
    if (!passwordConfirmation) {
        errors.push({
            error : 'password confirmation required',
        });
    }
    if (password !== passwordConfirmation) {
        errors.push({ error: ' Passwords do not match' });
    }
    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }
    User.findOne({ email: email })
        .then( user => {
            if(user){
                return res.status(422).json({ errors: [{ error: ' user email already exists' }] });
            }else {
                const user = new User({
                    email: email,
                    password: password,
                });
                bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
                    if (err) throw err;
                    user.password = hash;
                    user.save()
                        .then(response => {
                            res.status(200).json({
                                success: true,
                                result: response
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                errors: [{ error: err }]
                            });
                        });
                });
                });
            }
        }).catch(err => {
            res.status(500).json({
                errors: [{ error: err }]
            });
        });
};

exports.signin = (req, res) => {
    let { email, password } = req.body;
    let errors = [];
    if (!email) {
        errors.push({ error: 'Email Required' });
    }
    if (!emailRegexp.test(email)) {
        errors.push({ error: 'Invalid Email' });
    }
    if (!password) {
        errors.push({ error: ' Password Required' });
    }
    if (errors.length > 0) {
        return res.status(422).json({ errors:  errors });
    }
    User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(404).json({
                errors: [{ error:'User not found' }]
            });
        } else {
            bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) {
                    return res.status(400).json({ errors: [{ error:'Password Incorrect' }] });
                }
                let access_token = createJWT(
                    user.email,
                    user._id,
                    3600
                );
       
                jwt.verify(access_token,process.env.token, (err,decoded) => {
                    if (err) {
                        res.status(500).json({ erros: err });
                        console.log('not able to verify');
                    }
                    if (decoded) {
                        return res.status(200).json({
                            success: true,
                            token: access_token,
                            message: user
                        });
                    }
                });
            }).catch(err => {
                res.status(500).json({ erros: err });
            });
        }
    }).catch(err => {
        res.status(500).json({ erros: err });
    });
};