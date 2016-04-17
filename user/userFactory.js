app.factory('UserFactory', function($http){

  var getUsers = function(){
    return $http({
      method: 'GET',
      url: 'http://spa.tglrw.com:4000/users'
    })
    .then(function(users){
      return users.data;
    })
  }

  return {
    getUsers: getUsers,
  }
})