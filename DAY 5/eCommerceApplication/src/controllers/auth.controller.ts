interface User {
  email: string;
  password: string;
}

export class AuthController {
  static $inject = ['$scope', 'AuthService'];

  users: User[] = [
    { email: 'sagar.shinde@gmail.com', password: '2222' },
    { email: 'shivu.shinde@gmail.com', password: '1111' },
    { email: 'rohit.shinde@gmail.com', password: '0000' }
  ];

  user: User = { email: '', password: '' };
  message: string | null = null;

  constructor(private $scope: angular.IScope, private authService: any) {}

  onValidate(): void {
    this.message = null;

    if (!this.user.email || !this.user.password) {
      this.message = 'Please enter both email and password.';
      return;
    }

    const isValidUser = this.authService.validateUser(this.user.email, this.user.password);
    if (isValidUser) {
      this.message = 'Login successful! Welcome.';
      console.log('Welcome');
    } else {
      this.message = 'Invalid email or password.';
      console.log('Invalid User');
    }
  }
}
