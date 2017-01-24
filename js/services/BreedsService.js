pupGrade.factory("BreedsService", ["$http", function($http) {
  var obj = {};
  obj.getBreeds = function(){ 
    $http.get("https://ajax-puppies.herokuapp.com/breeds.json")
    .success(function(data, status, headers, config) {
      obj.data = data;
    })
  }

  return obj;
}]
)
