class Auth {
    constructor() {
        this.authenticated = false;
    }

    signin(callback) {
        this.authenticated = true;
        callback();
    }

    signout(callback){
        this.authenticated = false;
        callback();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}
export default new Auth();