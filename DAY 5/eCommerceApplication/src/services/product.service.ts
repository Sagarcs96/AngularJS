export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export class ProductService {
  static $inject = ['$http'];

  private products: Product[] = [];
  static fetchProducts: any;

  constructor(private $http: ng.IHttpService) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    // Replace with actual external API for real product data
    this.products = [
      { id: 1, name: 'Laptop', description: 'High-end laptop', price: 1200, image: 'path_to_image1.jpg' },
      { id: 2, name: 'Smartphone', description: 'Latest smartphone', price: 800, image: 'path_to_image2.jpg' },
      { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 150, image: 'path_to_image3.jpg' }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
