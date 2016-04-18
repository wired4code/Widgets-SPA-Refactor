app.controller('WidgetController', ['HomeFactory', 'WidgetFactory','$scope', '$location', '$anchorScroll', function(HomeFactory, WidgetFactory, $scope, $location, $anchorScroll){

  $scope.widgets;
  $scope.newWidget = {};

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

  $scope.addWidget = function(widget){
    var obj = widget;
    $scope.newWidget = {};
    WidgetFactory.addWidget(obj)
      .then(function(){
        $scope.getWidgets();
      })
  }

  $scope.editWidget = function(widget){
    var id = widget.id;
    WidgetFactory.editWidget(widget, id)
      .then(function(){
        $scope.getWidgets();
      })
  }

  $scope.getWidgets();

}])