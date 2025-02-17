import angular from 'angular';
import { UserModule } from './modules/user.module';
import { ProductModule } from './modules/product.module';
import { ShoppingCartModule } from './modules/shoppingcart.module';

angular.module('ecommerceApp', ['ngRoute', 'userModule', 'productModule', 'shoppingCartModule']);