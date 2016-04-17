app.factory('HomeFactory', function($http){

  var getUsers = function(){
    return $http({
      method: 'GET',
      url: 'http://spa.tglrw.com:4000/users'
    })
    .then(function(users){
      console.log('FACT:USERS ', users)
      return users.data;
    })
  }

  var getWidgets = function(){
    return $http({
      method: 'GET',
      url: 'http://spa.tglrw.com:4000/widgets'
    })
    .then(function(widgets){
      return widgets.data;
    })
  }

  return {
    getUsers: getUsers,
    getWidgets: getWidgets
  }
})