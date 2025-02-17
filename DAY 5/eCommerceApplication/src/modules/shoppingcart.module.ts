import angular from 'angular';
import { ShoppingCartController } from '../controllers/shoppingcart.controller';
import { ShoppingCartService } from '../services/shoppingcart.service';

export const ShoppingCartModule = angular.module('shoppingCartModule', [])
  .controller('shoppingCartController', ShoppingCartController)
  .service('ShoppingCartService', ShoppingCartService);
