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
      puppy.breed_id = $scope.checkforId(puppy)
      PuppiesService.createPuppy(puppy);
      $scope.newPuppy = {};
    }

    $scope.checkforId = function(puppy){
      for (var i = 0; i < $scope.breeds.length; i++) {
        if ( $scope.breeds[i].name === puppy.name ) {
          return $scope.breeds[i].id
        }
      }
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
      if(!breed){
        return false
      }
      for (var i = 0; i < $scope.breeds.length; i++) {
        if ($scope.breeds[i].name.search(new RegExp(breed, ["i"])) !== -1) {
          $scope.autocompletedSuggestions.push($scope.breeds[i])
        }
      }
    }

    $scope.fillInInput = function(id){
      $scope.newPuppy.breed_id = id
      $scope.newPuppy.breed = $scope.returnBreed(id)
    }

  }]
);
