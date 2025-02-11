angular.module('onlineShoppingPortal')
    .service('authService', ['$http', function ($http) {
        this.login = function (username, password) {
            return $http.post('/api/login', { username: username, password: password });
        };

        this.register = function (username, password) {
            return $http.post('/api/register', { username: username, password: password });
        };
    }]);
