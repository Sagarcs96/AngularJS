// interface User {
//   email: string;
//   password: string;
// }
var authController = /** @class */ (function () {
    function authController() {
        this.users = [
            { email: 'sagar.shinde@gmail.com', password: "2222" },
            { email: 'shivu.shinde@gmail.com', password: "1111" },
            { email: 'rohit.shinde@gmail.com', password: "0000" }
        ];
        this.user = { email: "", password: "" };
        this.message = null;
    }
    authController.prototype.onValidate = function () {
        this.message = null;
        var isValidUser = false;
        if (!this.user.email || !this.user.password) {
            this.message = "Please enter both email and password.";
            return;
        }
        // const foundUser = this.users.find(u => u.email === this.user.email && u.password === this.user.password);
        for (var i = 0; i < this.users.length; i++) {
            if (this.user.email === this.users[i].email && this.user.password === this.users[i].password) {
                isValidUser = true;
                break;
            }
        }
        if (isValidUser) {
            this.message = "Login successful! Welcome.";
            console.log("Welcome");
        }
        else {
            this.message = "Invalid email or password.";
            console.log("Invalid User");
        }
    };
    authController.$inject = ['$scope'];
    return authController;
}());
