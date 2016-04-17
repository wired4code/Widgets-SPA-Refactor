app.controller('WidgetController', ['HomeFactory','$scope', '$location', '$anchorScroll', function(HomeFactory, $scope, $location, $anchorScroll){

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

  $scope.createWidget = function(){
    $location.hash('create-widget');
    $anchorScroll();
  }

  $scope.getWidgets();

}])