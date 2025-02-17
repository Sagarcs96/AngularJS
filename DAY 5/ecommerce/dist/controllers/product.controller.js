var ProductController = /** @class */ (function () {
    function ProductController($scope, $location, $routeParams) {
        this.$scope = $scope;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.message = 'Welcome to products list!';
        this.catalogs = [
            {
                "id": 1,
                "productName": "Wireless Headphones",
                "description": "Immersive sound with noise cancellation.",
                "price": 129.99,
                "imagePath": "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                "id": 2,
                "productName": "Smartwatch",
                "description": "Track fitness, notifications, and control music.",
                "price": 199.99,
                "imagePath": "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                "id": 3,
                "productName": "Bluetooth Speaker",
                "description": "Portable and powerful speaker.",
                "price": 79.99,
                "imagePath": "https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                "id": 4,
                "productName": "Laptop",
                "description": "High-performance laptop for work and entertainment.",
                "price": 999.99,
                "imagePath": "https://images.pexels.com/photos/42408/pexels-photo-42408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 5,
                "productName": "Smartphone",
                "description": "Advanced camera and features.",
                "price": 799.99,
                "imagePath": "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": 6,
                "productName": "Tablet",
                "description": "Portable entertainment and productivity device.",
                "price": 399.99,
                "imagePath": "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 7,
                "productName": "Camera",
                "description": "Capture stunning photos and videos.",
                "price": 599.99,
                "imagePath": "https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 8,
                "productName": "E-reader",
                "description": "Enjoy reading your favorite books digitally.",
                "price": 129.99,
                "imagePath": "https://images.pexels.com/photos/7129624/pexels-photo-7129624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 9,
                "productName": "Gaming Console",
                "description": "Immersive gaming experience.",
                "price": 499.99,
                "imagePath": "https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 10,
                "productName": "TV",
                "description": "High-definition television for entertainment.",
                "price": 799.99,
                "imagePath": "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": 11,
                "productName": "Monitor",
                "description": "High-resolution monitor for work or gaming.",
                "price": 299.99,
                "imagePath": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 12,
                "productName": "Printer",
                "description": "Print documents and photos.",
                "price": 149.99,
                "imagePath": "https://images.pexels.com/photos/7218517/pexels-photo-7218517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 13,
                "productName": "External Hard Drive",
                "description": "Store and back up your data.",
                "price": 99.99,
                "imagePath": "https://www.pexels.com/photo/gray-external-drive-mounted-on-laptop-3361486/"
            },
            {
                "id": 14,
                "productName": "USB Flash Drive",
                "description": "Portable storage solution.",
                "price": 19.99,
                "imagePath": "https://www.pexels.com/photo/a-close-up-shot-of-an-otg-flash-drive-10336136/"
            },
            {
                "id": 15,
                "productName": "Webcam",
                "description": "Stay connected with video calls.",
                "price": 79.99,
                "imagePath": "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "id": 16,
                "productName": "Microphone",
                "description": "High-quality microphone for recording.",
                "price": 129.99,
                "imagePath": "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 17,
                "productName": "Keyboard",
                "description": "Ergonomic keyboard for comfortable typing.",
                "price": 79.99,
                "imagePath": "https://images.pexels.com/photos/20510020/pexels-photo-20510020/free-photo-of-a-black-computer-keyboard-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 18,
                "productName": "Mouse",
                "description": "Wireless mouse for smooth navigation.",
                "price": 49.99,
                "imagePath": "https://images.pexels.com/photos/8576161/pexels-photo-8576161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 19,
                "productName": "Router",
                "description": "High-speed Wi-Fi router.",
                "price": 199.99,
                "imagePath": "https://images.pexels.com/photos/29711663/pexels-photo-29711663/free-photo-of-modern-wireless-router-with-antennas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                "id": 20,
                "productName": "Modem",
                "description": "Connect to the internet.",
                "price": 99.99,
                "imagePath": "https://images.pexels.com/photos/8602202/pexels-photo-8602202.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        ];
        var productId = $routeParams['productId'];
        if (productId) {
            this.selectedProduct = this.getProductById(Number(productId));
        }
        else {
            this.selectedProduct = null;
        }
        $scope['data'] = this;
    }
    ProductController.prototype.addToCart = function (product) {
        console.log('Product added to cart:', product);
        // You can add logic to add this product to the cart here
        var temp = [];
        temp = JSON.parse(sessionStorage.getItem('cart') || '[]');
        if (temp != null) {
            temp.push(product);
        }
        else {
            temp = [];
            temp.push(product);
        }
        // temp.push(product);
        sessionStorage.setItem('cart', JSON.stringify(temp));
        this.$location.path('/cart'); // Redirect to catalog page
    };
    // Function to navigate to the details page for a product
    ProductController.prototype.viewProductDetails = function (productId) {
        this.$location.path("/product/".concat(productId));
    };
    // Function to get a product by ID
    ProductController.prototype.getProductById = function (productId) {
        for (var i = 0; i < this.catalogs.length; i++) {
            if (this.catalogs[i].id === productId) {
                return this.catalogs[i]; // Return the product if ID matches
            }
        }
        console.error("Product not found");
        return null; // Return null if product is not found
    };
    ProductController.$inject = ['$scope', '$location', '$routeParams'];
    return ProductController;
}());
