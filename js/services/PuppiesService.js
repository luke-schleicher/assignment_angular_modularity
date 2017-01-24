pupGrade.factory("PuppiesService", ["$http", function($http) {

  var obj = {};

  obj.getPuppies = function() {
    return $http.get("https://ajax-puppies.herokuapp.com/puppies.json")
      .success(function(data, status, headers, config) {
        obj.puppies = data;
        return obj.puppies;
      })
  };

  obj.createPuppy = function(puppy) {
    var newPuppy = {};
    newPuppy.name = puppy.name;
    newPuppy.breed_id = puppy.breed_id;
    return $http.post("https://ajax-puppies.herokuapp.com/puppies.json", newPuppy).success(function(data) {
      obj.puppies.push(data)
      return data;
    })
  }

    return obj;
  }]
)
