angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://warm-retreat-24285.herokuapp.com/');
    },
	
	create: function(listing) {
	  return $http.post('https://warm-retreat-24285.herokuapp.com/', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
    return $http.delete('https://warm-retreat-24285.herokuapp.com/', listing);

    }
  };

  return methods;
});
