export class ProductService {
    static $inject = ['$http', 'CartService'];
  
    constructor(private $http: angular.IHttpService, private cartService: any) {}
  
    getProducts() {
      return this.$http.get('./assets/products.json');
    }
  
    addToCart(product: any) {
      this.cartService.addToCart(product);
    }
  }
  