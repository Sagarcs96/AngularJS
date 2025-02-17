import angular from 'angular';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shoppingcart.service';

export const ProductModule = angular.module('productModule', [])
  .controller('productController', ProductController)
  .service('ProductService', ProductService)
  .service('ShoppingCartService', ShoppingCartService);
