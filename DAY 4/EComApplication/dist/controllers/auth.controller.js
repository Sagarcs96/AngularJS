var authController = /** @class */ (function () {
    function authController($scope) {
        this.$scope = $scope;
        this.username = '';
        this.password = '';
        this.message = '';
        $scope['vm'] = this;
    }
    authController.prototype.login = function () {
        if (this.username === 'admin' && this.password === '2222') {
            this.message = 'Login Successful';
        }
        else {
            this.message = 'Invalid credentials';
        }
    };
    authController.$inject = ['$Scope'];
    return authController;
}());