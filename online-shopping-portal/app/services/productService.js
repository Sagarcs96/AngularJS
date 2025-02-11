angular.module('onlineShoppingPortal')
    .service('productService', ['$http', function ($http) {
        this.getProducts = function () {
            return $http.get('/api/products');
        };
    }]);
