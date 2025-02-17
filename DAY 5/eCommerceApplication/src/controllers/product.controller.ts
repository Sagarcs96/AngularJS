import { ProductService, Product } from '../services/product.service';
import { ShoppingCartService } from '../services/shoppingcart.service';

export class ProductController {
  static $inject = ['$scope', 'ProductService', 'ShoppingCartService'];

  products: Product[] = [];

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) {
    this.products = productService.getProducts();
  }

  addToCart(product: Product): void {
    this.shoppingCartService.addToCart(product);
  }
}
