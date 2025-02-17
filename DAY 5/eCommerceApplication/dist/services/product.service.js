"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService($http) {
        this.$http = $http;
        this.products = [];
        this.fetchProducts();
    }
    ProductService.prototype.fetchProducts = function () {
        // Replace with actual external API for real product data
        this.products = [
            { id: 1, name: 'Laptop', description: 'High-end laptop', price: 1200, image: 'path_to_image1.jpg' },
            { id: 2, name: 'Smartphone', description: 'Latest smartphone', price: 800, image: 'path_to_image2.jpg' },
            { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 150, image: 'path_to_image3.jpg' }
        ];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.$inject = ['$http'];
    return ProductService;
}());
exports.ProductService = ProductService;
