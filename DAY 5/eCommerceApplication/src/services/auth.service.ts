import { User } from '../controllers/auth.controller'; // Import User interface

export class UserService {
  private users: User[] = [
    { email: 'sagar.shinde@gmail.com', password: '2222' },
    { email: 'shivu.shinde@gmail.com', password: '1111' },
    { email: 'rohit.shinde@gmail.com', password: '0000' }
  ];

  // Validates the user's credentials against the stored users
  validateUser(user: User): boolean {
    return this.users.some(u => u.email === user.email && u.password === user.password);
  }
}
