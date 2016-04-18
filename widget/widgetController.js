app.controller('WidgetController', ['HomeFactory', 'WidgetFactory','$scope', '$location', '$anchorScroll', '$routeParams', function(HomeFactory, WidgetFactory, $scope, $location, $anchorScroll, $routeParams){

  $scope.widgets;
  $scope.newWidget = {};
  $scope.newWidget.melts = $scope.newWidget.melts || false;

  var widgetId = $routeParams.widgetId;

  $scope.edited = {};
  $scope.edited.melts = $scope.edited.melts || false;

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
    widget.id = widgetId;
    WidgetFactory.editWidget(widget)
      .then(function(){
        $scope.getWidgets();
      })
  }

  $scope.getWidgets();

}])