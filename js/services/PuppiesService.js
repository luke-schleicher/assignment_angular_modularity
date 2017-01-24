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

  obj.puppyRemove = function(id){
    for(var i = 0; obj.puppies.length; i++){
      if(obj.puppies[i].id === id){
        obj.puppies.splice(i , 1)
        break;         
      }
    }
  }

  obj.adoptPuppy = function(id){
    return $http.delete("https://ajax-puppies.herokuapp.com/puppies/"+id+".json")
    .success(
      function(data){
        obj.puppyRemove(id)
        return data
      })
  }

    return obj;
  }]
)
