pupGrade.factory("PuppiesService", ["$http", function($http) {
  var obj = {};
  $http.get("https://ajax-puppies.herokuapp.com/puppies.json")
    .success(function(data, status, headers, config) {
      obj.data = data;
    })


    return obj;
  }]
)
