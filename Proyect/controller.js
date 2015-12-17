app.controller('myCont',function ($scope, $http){  //Create the controller
  		$scope.weathers=  [{city: "Resistencia",         country: "Argentina",
                                date: "Thu,17 Dec 2015 1:59 pm ART",   text: "Mostly Cloudy",
                                code: 26,   temp: 28,
                                tempUnit: "C", pressure: 992.21,
                                presUnit: "mb",    humidity: 32,
                                wind: 7,            windUnit: "Km/h"}];  
       //Create an array of weathers
    $scope.removeCity = function(weather){
           var i = $scope.weathers.indexOf(weather);
           $scope.weathers.splice(i,1);
  		}//Create a function that removes a city
  	$scope.searchCity =function (){
  			var city = $scope.cityBox;
  			var province = $scope.provinceBox;
  			$http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+city+'%E2%80%8B%2C%20'+province+'%E2%80%8B%22)%20and%20u=%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(function(response){
  				$scope.weathers.push({city: response.data.query.results.channel.location.city,         country: response.data.query.results.channel.location.country,
                                date: response.data.query.results.channel.item.condition.date,   text: response.data.query.results.channel.item.condition.text,
                                code: response.data.query.results.channel.item.condition.code,   temp: response.data.query.results.channel.item.condition.temp,
                                tempUnit: response.data.query.results.channel.units.temperature, pressure: response.data.query.results.channel.atmosphere.pressure,
                                presUnit: response.data.query.results.channel.units.pressure,    humidity: response.data.query.results.channel.atmosphere.humidity,
                                wind: response.data.query.results.channel.wind.speed,            windUnit: response.data.query.results.channel.units.speed});
  			                        
        });//send a get request yahoo's Api and push the results in the weathers array
        $scope.cityBox=  "";
        $scope.provinceBox= "";
  		} //at last clear the inputs
  	});