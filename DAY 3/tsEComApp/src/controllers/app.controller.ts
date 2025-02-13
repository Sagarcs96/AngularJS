import * as angular from 'angular';

interface IUser {
  name: string;
  email: string;
}

interface ICustomScope extends angular.IScope {
  vm: MyController; // Explicitly type the 'vm' to MyController
}

export class MyController {
  static $inject = ['$scope'];

  message: string;
  users: IUser[];

  constructor(private $scope: ICustomScope) {
    this.message = 'Welcome to Transflower TypeScript!';
    this.users = [
      { name: 'Sagar Shinde', email: 'sagar.shinde@gmail.com' },
      { name: 'Shivu Shinde', email: 'shivu.shinde@gmail.com' },
      { name: 'Rohit Shinde', email: 'rohit.shinde@gmail.com' }
    ];

    $scope.vm = this; // Assigning controller instance to vm explicitly
  }
}
