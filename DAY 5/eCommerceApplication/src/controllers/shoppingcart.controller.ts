import { ShoppingCartService } from '../services/shoppingcart.service';
import { Product } from '../services/product.service';

export class ShoppingCartController {
  static $inject = ['$scope', 'ShoppingCartService'];

  cart: Product[] = [];
  message: string = '';

  constructor(private shoppingCartService: ShoppingCartService) {
    this.loadCart();
  }

  private loadCart(): void {
    this.cart = this.shoppingCartService.getCartItems();
  }

  removeFromCart(product: Product): void {
    if (this.cart.length === 0) {
      this.message = 'Your cart is empty, nothing to remove.';
      return;
    }

    this.shoppingCartService.removeFromCart(product);
    this.loadCart();
  }
}
