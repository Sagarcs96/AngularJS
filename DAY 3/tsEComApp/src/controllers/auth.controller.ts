interface User {
  email: string;
  password: string;
}

export class AuthController {
  static $inject = ['$scope'];

  users: User[] = [
    { email: 'sagar.shinde@gmail.com', password: '2222' },
    { email: 'shivu.shinde@gmail.com', password: '1111' },
    { email: 'rohit.shinde@gmail.com', password: '0000' }
  ];

  user: User = { email: '', password: '' };
  message: string | null = null;

  onValidate(): void {
    this.message = null;
    let isValidUser = false;

    // Input validation check
    if (!this.user.email || !this.user.password) {
      this.message = 'Please enter both email and password.';
      return;
    }

    // Simplified validation logic
    for (let i = 0; i < this.users.length; i++) {
      if (this.user.email === this.users[i].email && this.user.password === this.users[i].password) {
        isValidUser = true;
        break;
      }
    }
    if (isValidUser) {
      this.message = 'Login successful! Welcome.';
      console.log('Welcome');
    } else {
      this.message = 'Invalid email or password.';
      console.log('Invalid User');
    }
  }
}
