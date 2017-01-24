pupGrade.controller("PuppyCtrl", ["$scope", "PuppiesService", "BreedsService",
  function($scope, PuppiesService, BreedsService) {

    BreedsService.getBreeds()
    .then(function(response) {
      $scope.breeds = response.data;
    });

    PuppiesService.getPuppies()
    .then(function(response) {
      $scope.puppies = response.data;
      console.log($scope.puppies);
    });



  }]
);
