angular.module('onlineShoppingPortal')
    .controller('authController', ['$scope', 'authService', function ($scope, authService) {
        $scope.login = function () {
            authService.login($scope.username, $scope.password)
                .then(function(response) {
                    // Redirect to catalog page
                    window.location.href = '#/catalog';
                })
                .catch(function(error) {
                    $scope.errorMessage = "Invalid credentials";
                });
        };

        $scope.register = function () {
            authService.register($scope.username, $scope.password)
                .then(function(response) {
                    $scope.successMessage = "Registration successful!";
                })
                .catch(function(error) {
                    $scope.errorMessage = "Registration failed!";
                });
        };
    }]);
