import * as angular from 'angular';

interface ICustomScope extends angular.IScope{
    vm: any;
}

export class authController{
    static $inject=['$Scope'];
    
    public username: string;
    public password: string;
    public message: string;

    constructor(private $scope: ICustomScope) {
        this.username = '';
        this.password = '';
        this.message = '';
        $scope['vm'] = this;
    }

    public login(): void {
        if (this.username === 'admin' && this.password === '2222') {
            this.message = 'Login Successful';
        } else {
            this.message = 'Invalid credentials';
        }
    }
}