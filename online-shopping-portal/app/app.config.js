angular.module('onlineShoppingPortal')
  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
          .when('/auth', {
              templateUrl: './app/components/auth/auth.html',
              controller: 'authController'
          })
          .when('/catalog', {
              templateUrl: './app/components/productCatalog/productCatalog.html',
              controller: 'productCatalogController'
          })
          .when('/cart', {
              templateUrl: './app/components/shoppingCart/shoppingCart.html',
              controller: 'shoppingCartController'
          })
          .when('/order', {
              templateUrl: './app/components/orderProcessing/orderProcessing.html',
              controller: 'orderProcessingController'
          })
          .when('/shipment', {
              templateUrl: './app/components/shipmentPayment/shipmentPayment.html',
              controller: 'shipmentPaymentController'
          })
          .when('/crm', {
              templateUrl: './app/components/crm/crm.html',
              controller: 'crmController'
          })
          .otherwise({
              redirectTo: '/auth'
          });
  }]);
