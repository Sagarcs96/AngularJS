"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
var angular_1 = __importDefault(require("angular"));
var product_controller_1 = require("../controllers/product.controller");
var product_service_1 = require("../services/product.service");
var shoppingcart_service_1 = require("../services/shoppingcart.service");
exports.ProductModule = angular_1.default.module('productModule', [])
    .controller('productController', product_controller_1.ProductController)
    .service('ProductService', product_service_1.ProductService)
    .service('ShoppingCartService', shoppingcart_service_1.ShoppingCartService);
