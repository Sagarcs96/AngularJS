"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
var angular_1 = __importDefault(require("angular"));
var auth_controller_1 = require("../controllers/auth.controller");
var auth_service_1 = require("../services/auth.service");
exports.UserModule = angular_1.default.module('userModule', [])
    .service('UserService', auth_service_1.UserService)
    .controller('authController', auth_controller_1.AuthController);
