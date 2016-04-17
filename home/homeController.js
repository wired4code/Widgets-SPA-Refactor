app.controller('HomeController', ['HomeFactory','$scope', function(HomeFactory, $scope){

  $scope.users;
  $scope.widgets;

  $scope.getUsers = function(){
    HomeFactory.getUsers()
      .then(function(data){
        $scope.users = data;
      })
  }

  $scope.getWidgets = function(){
    HomeFactory.getWidgets()
      .then(function(data){
        $scope.widgets = data;

      })
  }

  $scope.getUsers();
  $scope.getWidgets();

}])