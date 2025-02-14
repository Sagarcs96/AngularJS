import * as angular from 'angular';
import { authController } from '../controllers/auth.controller';
angular.module('authModule', []).controller('authController', authController);