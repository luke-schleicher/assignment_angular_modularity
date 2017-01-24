pupGrade.factory("BreedsService", ["$http", function($http) {
  var obj = {};
  $http.get("https://ajax-puppies.herokuapp.com/breeds.json")
    .success(function(data, status, headers, config) {
      console.log(data);
      obj.data = data;
    })
    return obj;
  }]
)
