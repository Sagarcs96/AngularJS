"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = __importDefault(require("angular"));
require("angular-route");
var routesConfig = function ($routeProvider) {
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
            products: ['ProductService', function (productService) { return productService.fetchProducts(); }]
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
angular_1.default.module('ecommerceApp').config(routesConfig);
