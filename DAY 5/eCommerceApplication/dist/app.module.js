"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = __importDefault(require("angular"));
angular_1.default.module('ecommerceApp', ['ngRoute', 'userModule', 'productModule', 'shoppingCartModule']);
