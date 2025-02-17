"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var ProductController = /** @class */ (function () {
    function ProductController(productService, shoppingCartService) {
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.products = productService.getProducts();
    }
    ProductController.prototype.addToCart = function (product) {
        this.shoppingCartService.addToCart(product);
    };
    ProductController.$inject = ['$scope', 'ProductService', 'ShoppingCartService'];
    return ProductController;
}());
exports.ProductController = ProductController;
