app.controller("MainController", ["$scope","places",function($scope,places){
    places.success(function(data){
        $scope.geodata = data;
    });
  $scope.mapCenter={
    	lat: 37.6688888889,
        lng: -122.080833333,
  		zoom: 17
    };
    
  //$scope.mapMarkers=geodataToMarkers($scope.geodata);
}]);