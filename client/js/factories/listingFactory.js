angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://warm-retreat-24285.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://warm-retreat-24285.herokuapp.com/api/listings/', listing);
    }, 

    delete: function(index) {
	   /**TODO
        return result of HTTP delete method
       */
    //return $http.delete('https://warm-retreat-24285.herokuapp.com/api/listings/' + id);
    return $http.delete('https://warm-retreat-24285.herokuapp.com/api/listings/',index);

    }
  };

  return methods;
});
