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

  var editWidget = function(widget, id){
    return $http({
      method: 'PUT',
      url: 'http://spa.tglrw.com:4000/widgets/:'+id,
      data: widget
    })
  }

  return {
    addWidget: addWidget,
    editWidget: editWidget
  }
})