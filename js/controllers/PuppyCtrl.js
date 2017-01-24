pupGrade.controller("PuppyCtrl", ["$scope", "PuppiesService", "BreedsService", "$interval",
  function($scope, PuppiesService, BreedsService, $interval) {

    BreedsService.getBreeds()
    .then(function(response) {
      $scope.breeds = response.data;
    });

    $scope._getPuppies = function() {
      PuppiesService.getPuppies()
        .then(function(response) {
          $scope.puppies = response.data;
        });
    };

    $scope._getPuppies();

    $interval($scope._getPuppies, 5000)

    $scope.createPuppy = function(puppy) {
      PuppiesService.createPuppy(puppy);
      $scope.newPuppy = {};
    }

    $scope.returnBreed = function(id) {
      for (var i = 0; i < $scope.breeds.length; i++) {
        if ( $scope.breeds[i].id === id ) {
          return $scope.breeds[i].name;
        }
      }
    }

    $scope.adoptPuppy = function(id){
      PuppiesService.adoptPuppy(id)
    }

    $scope.autocomplete = function(breed) {
      $scope.autocompletedSuggestions = [];
      for (var i = 0; i < $scope.breeds.length; i++) {
        if ($scope.breeds[i].name.search(breed) !== -1) {
          $scope.autocompletedSuggestions.push($scope.breeds[i].name)
        }
      }
    }

  }]
);
