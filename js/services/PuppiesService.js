pupGrade.factory("PuppiesService", ["$http", function($http) {

  var obj = {};

  obj.getPuppies = function() {
    return $http.get("https://ajax-puppies.herokuapp.com/puppies.json")
      .success(function(data, status, headers, config) {
        obj.data = data;
        return obj.data;
      })
  };

  obj.createPuppy = function(puppy) {
    var newPuppy = {};
    newPuppy.name = puppy.name;
    newPuppy.breed_id = puppy.breed_id;
    $http.post("https://ajax-puppies.herokuapp.com/puppies.json");
  }

    return obj;
  }]
)
