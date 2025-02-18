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
    // Fetch the product da9ta from the JSON file (e.g., assets/products.JSON)
    this.$http.get<Product[]>('assets/products.JSON')
      .then((response: { data: Product[]; }) => {
        this.products = response.data; // Save the data to the products array
      })
      .catch((error: any) => {
        console.error('Error fetching products:', error); // Handle any errors
      });
  }

  getProducts(): Product[] {
    return this.products;
  }
}
