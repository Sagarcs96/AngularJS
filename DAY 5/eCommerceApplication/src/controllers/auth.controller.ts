import { UserService } from "../services/auth.service";

export interface User {
  email: string;
  password: string;
}

export class AuthController {
  static $inject = ['$scope', 'UserService'];

  user: User = { email: '', password: '' };
  message: string | null = null;

  constructor(private userService: UserService) {}

  // Validates login credentials and displays messages
  onValidate(): void {
    this.message = null;

    if (!this.user.email || !this.user.password) {
      this.message = 'Please enter both email and password.';
      return;
    }

    const isValidUser = this.userService.validateUser(this.user);

    if (isValidUser) {
      this.message = 'Login successful! Welcome.';
      localStorage.setItem('loggedInUser', JSON.stringify(this.user));
    } else {
      this.message = 'Invalid email or password.';
    }
  }
}
