// Define the LoginController
app.controller('LoginController', function($scope) {

    // List of valid users with emails and passwords
    $scope.users = [
        {email: "sagar.shinde@gmail.com", password: "2222"},
        {email: "deepak.shinde@gmail.com", password: "3333"},
        {email: "shivu.shinde@gmail.com", password: "4444"},
        {email: "rohit.shinde@gmail.com", password: "1111"}
    ];

    // Create a model for the user data (email and password to be entered)
    $scope.user = {
        email: "",
        password: ""
    };

    // Function to handle form submission or event handler
    $scope.onValidate = function() {
        var isValidUser = false;
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.user.email === $scope.users[i].email && $scope.user.password === $scope.users[i].password) {
                isValidUser = true;
                break;
            }
        }

        if (isValidUser) {
            console.log("Welcome");
        } else {
            console.log("Invalid User");
        }
    };
});
