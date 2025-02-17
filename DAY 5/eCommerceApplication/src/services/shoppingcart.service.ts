import { Product } from './product.service';

export class ShoppingCartService {
  static $inject = ['$window'];

  private cart: Product[] = [];

  constructor(private $window: ng.IWindowService) {
    const storedCart = $window.localStorage.getItem('shoppingCart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.$window.localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
  }

  removeFromCart(product: Product): void {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.$window.localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    }
  }

  getCartItems(): Product[] {
    return this.cart;
  }
}
