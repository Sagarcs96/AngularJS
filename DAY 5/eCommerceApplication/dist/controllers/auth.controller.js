"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var AuthController = /** @class */ (function () {
    function AuthController(userService) {
        this.userService = userService;
        this.user = { email: '', password: '' };
        this.message = null;
    }
    // Validates login credentials and displays messages
    AuthController.prototype.onValidate = function () {
        this.message = null;
        if (!this.user.email || !this.user.password) {
            this.message = 'Please enter both email and password.';
            return;
        }
        var isValidUser = this.userService.validateUser(this.user);
        if (isValidUser) {
            this.message = 'Login successful! Welcome.';
            localStorage.setItem('loggedInUser', JSON.stringify(this.user));
        }
        else {
            this.message = 'Invalid email or password.';
        }
    };
    AuthController.$inject = ['$scope', 'UserService'];
    return AuthController;
}());
exports.AuthController = AuthController;
