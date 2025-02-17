"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartService = void 0;
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService($window) {
        this.$window = $window;
        this.cart = [];
        var storedCart = $window.localStorage.getItem('shoppingCart');
        if (storedCart) {
            this.cart = JSON.parse(storedCart);
        }
    }
    ShoppingCartService.prototype.addToCart = function (product) {
        this.cart.push(product);
        this.$window.localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        var index = this.cart.indexOf(product);
        if (index !== -1) {
            this.cart.splice(index, 1);
            this.$window.localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
        }
    };
    ShoppingCartService.prototype.getCartItems = function () {
        return this.cart;
    };
    ShoppingCartService.$inject = ['$window'];
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
