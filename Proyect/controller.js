app.controller('myCont',function ($scope, $http, $localStorage){  //Create the controller
    $scope.$storage = $localStorage.$default({weathers: []});
		$scope.weathers= $localStorage.weathers;
    $scope.removeCity = function(weather){
        var i = $scope.weathers.indexOf(weather);
        $scope.weathers.splice(i,1);
  	}//Create a function that removes a city
  	$scope.searchCity = function (){
  			var city = $scope.cityBox;
  			var province = $scope.provinceBox;
  			$http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+city+'%E2%80%8B%2C%20'+province+'%E2%80%8B%22)%20and%20u=%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(function(response){
  				  var weatheRes = response.data.query.results.channel;
            $localStorage.weathers.push({
                city: weatheRes.location.city,         country: weatheRes.location.country,
                date: weatheRes.item.condition.date,   text: weatheRes.item.condition.text,
                code: weatheRes.item.condition.code,   temp: weatheRes.item.condition.temp,
                tempUnit: weatheRes.units.temperature, pressure: weatheRes.atmosphere.pressure,
                presUnit: weatheRes.units.pressure,    humidity: weatheRes.atmosphere.humidity,
                wind: weatheRes.wind.speed,            windUnit: weatheRes.units.speed});
            $scope.weathers= $localStorage.weathers;
          //$scope.weathers = $scope.$storage.weathers;
  			                        
        });//send a get request yahoo's Api and push the results in the weathers array
        $scope.cityBox=  "";
        $scope.provinceBox= "";
  		} //at last clear the inputs
});