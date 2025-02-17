import angular from 'angular';
import { AuthController } from '../controllers/auth.controller';
import { UserService } from '../services/auth.service';

export const UserModule = angular.module('userModule', [])
  .service('UserService', UserService)
  .controller('authController', AuthController);
