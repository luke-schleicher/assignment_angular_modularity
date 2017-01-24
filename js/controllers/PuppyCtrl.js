pupGrade.controller("PuppyCtrl", ["$scope", "PuppiesService", "BreedsService",
  function($scope, PuppiesService, BreedsService) {
    BreedsService.getBreeds().then(
        $scope.breeds = response
      )
    
  }]
);
