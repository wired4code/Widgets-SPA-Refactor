app.controller('UserController', ['HomeFactory', '$scope', function(HomeFactory, $scope){

  $scope.users;

  $scope.getUsers = function(){
    HomeFactory.getUsers()
      .then(function(data){
        $scope.users = data;
      })
  }

  $scope.getUsers();

}])