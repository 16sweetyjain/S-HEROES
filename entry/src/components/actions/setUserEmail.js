const setUserEmail = payload => {
    return{
        type:'SET_USER_EMAIL',
        payload:payload
    };
};

module.exports = setUserEmail;