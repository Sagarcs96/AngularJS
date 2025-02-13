var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to Transflower TypeScript!';
        this.users = [
            { name: 'Sagar Shinde', email: 'sagar.shinde@gmail.com' },
            { name: 'Shivu Shinde', email: 'shivu.shinde@gmail.com' },
            { name: 'Rohit Shinde', email: 'rohit.shinde@gmail.com' }
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());
