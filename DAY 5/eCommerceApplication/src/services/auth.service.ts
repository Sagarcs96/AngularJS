export class AuthService {
  validateUser(email: string, password: string): boolean {
    // Simulated user validation logic
    const users = [
      { email: 'sagar.shinde@gmail.com', password: '2222' },
      { email: 'shivu.shinde@gmail.com', password: '1111' },
      { email: 'rohit.shinde@gmail.com', password: '0000' }
    ];

    return users.some(user => user.email === email && user.password === password);
  }
}