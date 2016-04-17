app.controller('WidgetController', ['HomeFactory','$scope', function(HomeFactory, $scope){

  $scope.widgets;

  $scope.getWidgets = function(){
    HomeFactory.getWidgets()
      .then(function(data){
        $scope.widgets = data;
        for(var i = 0; i < $scope.widgets.length; i++){
          (function(index){
            if($scope.widgets[i].melts === true){
              $scope.widgets[i].melts = 'yes';
            } else{
              $scope.widgets[i].melts = 'no';
            }
          })(i)
        }

      })
  }

  $scope.getWidgets();

}])