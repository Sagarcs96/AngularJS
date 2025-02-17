"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { email: 'sagar.shinde@gmail.com', password: '2222' },
            { email: 'shivu.shinde@gmail.com', password: '1111' },
            { email: 'rohit.shinde@gmail.com', password: '0000' }
        ];
    }
    // Validates the user's credentials against the stored users
    UserService.prototype.validateUser = function (user) {
        return this.users.some(function (u) { return u.email === user.email && u.password === user.password; });
    };
    return UserService;
}());
exports.UserService = UserService;
