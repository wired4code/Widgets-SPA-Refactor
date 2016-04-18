app.factory('WidgetFactory', function($http){

  var addWidget = function(widget){
    return $http({
      method: 'POST',
      url: '/addwidget',
      data: JSON.stringify(widget)
    })
      .then(function(widget){
        console.log('Widget successfully added');
        return widget;
      });
  }

  var editWidget = function(widget){
    return $http({
      method: 'PUT',
      url: '/changewidget',
      data: JSON.stringify(widget);
    }).then(function(widget){
      console.log('Widget successfully changed');
      return widget;
    })
  }

  return {
    addWidget: addWidget,
    editWidget: editWidget
  }
})