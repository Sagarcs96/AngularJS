"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartModule = void 0;
var angular_1 = __importDefault(require("angular"));
var shoppingcart_controller_1 = require("../controllers/shoppingcart.controller");
var shoppingcart_service_1 = require("../services/shoppingcart.service");
exports.ShoppingCartModule = angular_1.default.module('shoppingCartModule', [])
    .controller('shoppingCartController', shoppingcart_controller_1.ShoppingCartController)
    .service('ShoppingCartService', shoppingcart_service_1.ShoppingCartService);
