"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartController = void 0;
var ShoppingCartController = /** @class */ (function () {
    function ShoppingCartController(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.cart = [];
        this.message = '';
        this.loadCart();
    }
    ShoppingCartController.prototype.loadCart = function () {
        this.cart = this.shoppingCartService.getCartItems();
    };
    ShoppingCartController.prototype.removeFromCart = function (product) {
        if (this.cart.length === 0) {
            this.message = 'Your cart is empty, nothing to remove.';
            return;
        }
        this.shoppingCartService.removeFromCart(product);
        this.loadCart();
    };
    ShoppingCartController.$inject = ['$scope', 'ShoppingCartService'];
    return ShoppingCartController;
}());
exports.ShoppingCartController = ShoppingCartController;
