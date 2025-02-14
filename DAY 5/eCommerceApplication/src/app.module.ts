import * as angular from 'angular';
import ngRoute from 'angular-route';
import { AuthController } from './controllers/auth.controller';
import { CartController } from './controllers/cart.controller';
import { ProductController } from './controllers/product.controller';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';

var app = angular.module('myApp', [ngRoute])
angular.module('myApp')
  .config(['$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: './views/login.html',
        controller: 'AuthController',
        controllerAs: 'authCtrl'
      })
      .when('/products', {
        templateUrl: './views/product.html',
        controller: 'ProductController',
        controllerAs: 'prodCtrl'
      })
      .when('/cart', {
        templateUrl: './views/cart.html',
        controller: 'CartController',
        controllerAs: 'cartCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);

app.controller('AuthController', AuthController);
app.controller('CartController', CartController);
app.controller('ProductController', ProductController);

app.service('CartService', CartService);
app.service('ProductService', ProductService);
app.service('AuthService', AuthService);