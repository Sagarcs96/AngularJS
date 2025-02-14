export class CartController {
    static $inject = ['$scope', 'CartService'];
  
    cartItems: any[] = [];
    total: number = 0;
  
    constructor(private $scope: angular.IScope, private cartService: any) {
      this.loadCart();
    }
  
    loadCart() {
      this.cartItems = this.cartService.getCart();
      this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }
  
    removeFromCart(item: any) {
      this.cartService.removeFromCart(item);
      this.loadCart();
    }
  }
  