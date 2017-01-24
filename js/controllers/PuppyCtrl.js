pupGrade.controller("PuppyCtrl", ["$scope", "PuppiesService", "BreedsService", "$interval",
  function($scope, PuppiesService, BreedsService, $interval) {
    BreedsService.getBreeds()
    .then(function(response) {
      $scope.breeds = response.data;
    });


    $interval( function(){
    PuppiesService.getPuppies()
    .then(function(response) {
      $scope.puppies = response.data;
    });}, 2000)

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

    $scope.adoptPuppy = function(id){
      PuppiesService.adoptPuppy(id)
    }

  }]
);
