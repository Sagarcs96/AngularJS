// Define the ProductController
app.controller('ProductController', function($scope) {

    // List of products
    $scope.products = [
        {name: "Apple", price: "20", image: "https://via.placeholder.com/100?text=Apple"},
        {name: "Mango", price: "30", image: "https://via.placeholder.com/100?text=Mango"},
        {name: "Banana", price: "50", image: "https://via.placeholder.com/100?text=Banana"},
        {name: "Kivi", price: "85", image: "https://via.placeholder.com/100?text=Kivi"}
    ];

});
