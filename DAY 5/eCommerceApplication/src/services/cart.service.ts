export class CartService {
    static $inject = ['$window'];
  
    private cart: any[] = [];
  
    constructor(private $window: angular.IWindowService) {
      const cartData = $window.localStorage.getItem('cart');
      if (cartData) {
        this.cart = JSON.parse(cartData);
      }
    }
  
    addToCart(product: any) {
      this.cart.push(product);
      this.updateCart();
    }
  
    removeFromCart(product: any) {
      this.cart.forEach((item, index) => {
        if (item.id === product.id) {
          this.cart.splice(index, 1);
          this.updateCart();
        }
      });
    }
  
    getCart() {
      return this.cart;
    }
  
    private updateCart() {
      this.$window.localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
  