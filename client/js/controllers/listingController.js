angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

  
    $scope.addListing = function() {
    $scope.listings.push($scope.newListing);
    $scope.newListing = {};
    Listings.create(newListing);
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
      Listings.delete(index);
    };
    
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);