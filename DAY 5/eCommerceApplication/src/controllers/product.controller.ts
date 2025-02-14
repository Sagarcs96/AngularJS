export class ProductController {
    static $inject = ['$scope', 'ProductService'];
  
    products: any[] = [];
  
    constructor(private $scope: angular.IScope, private productService: any) {
      this.getProducts();
    }
  
    getProducts(): void {
      this.productService.getProducts()
        .then((response: any) => {
          this.products = response.data;
        })
        .catch((error: any) => {
          console.error('Error fetching products', error);
        });
    }
  
    addToCart(product: any): void {
      this.productService.addToCart(product);
    }
  }
  