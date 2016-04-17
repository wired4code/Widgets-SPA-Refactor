app.controller('UserController', ['HomeFactory', '$scope','$routeParams', function(HomeFactory, $scope, $routeParams){

  var individual = $routeParams.userId - 1;
  $scope.users;
  $scope.oneuser;

  $scope.getUsers = function(){
    HomeFactory.getUsers()
      .then(function(data){
        $scope.users = data;
        $scope.oneuser = data[individual];
      })
  }

  $scope.getUsers();

}])