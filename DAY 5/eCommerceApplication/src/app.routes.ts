import angular from 'angular';
import 'angular-route';
import { ProductService } from './services/product.service';

const routesConfig = ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
        .when('/login', {
            templateUrl: './views/login.html',
            controller: 'AuthController',
            controllerAs: 'authCtrl'
        })
        .when('/products', {
            templateUrl: './views/product.html',
            controller: 'ProductController',
            controllerAs: 'productCtrl',
            resolve: {
                products: ['ProductService', (productService: ProductService) => productService.fetchProducts()]
            }
        })
        .when('/cart', {
            templateUrl: './views/shoppingcart.html',
            controller: 'ShoppingCartController',
            controllerAs: 'cartCtrl'
        })
        .otherwise({
            redirectTo: '/products'
        });
};

routesConfig.$inject = ['$routeProvider'];

angular.module('ecommerceApp').config(routesConfig);
