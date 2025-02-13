import * as angular from "angular";
import { MyController } from "./controllers/app.controller";
import { AuthController } from "./controllers/auth.controller";

angular.module("myApp", [])
  .controller("MyController", MyController)
  .controller("AuthController", AuthController); // Use the correct name for consistency
