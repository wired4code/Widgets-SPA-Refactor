app.factory('WidgetFactory', function($http){

  var addWidget = function(widget){
    return $http({
      method: 'POST',
      url: '//spa.tglrw.com:4000/widgets',
      data: JSON.stringify(widget)
    })
      .then(function(data){
        return data;
      });
  }

  var editWidget = function(widget){
    var id = widget.id;
    return $http({
      method: 'PUT',
      url: '//spa.tglrw.com:4000/widgets/'+id,
      data: JSON.stringify(widget)
    }).then(function(data){
      return data;
    })
  }

  return {
    addWidget: addWidget,
    editWidget: editWidget
  }
})