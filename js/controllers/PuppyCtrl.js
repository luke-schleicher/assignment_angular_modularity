pupGrade.controller("PuppyCtrl", ["$scope", "PuppiesService", "BreedsService", "$http",
  function($scope, PuppiesService, BreedsService, $http) {

    BreedsService.getBreeds()
    .then(function(response) {
      $scope.breeds = response.data;
    });

    PuppiesService.getPuppies()
    .then(function(response) {
      $scope.puppies = response.data;
    });

    $scope.createPuppy = function(puppy) {
      PuppiesService.createPuppy(puppy);
    }

    $scope.returnBreed = function(id) {
      for (var i = 0; i < $scope.breeds.length; i++) {
        if ( $scope.breeds[i].id === id ) {
          return $scope.breeds[i].name;
        }
      }
    }

  }]
);
