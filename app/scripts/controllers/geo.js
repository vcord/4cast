'use strict';

/**
* @Implements Geo controller
*/
angular.module('4castApp')
.controller('GeoCtrl', function ($scope, $http, toastr, $window, $state, findme, $rootScope, vcordDB) {

			//gets all weather forecast history from the Local storage.
			$scope.LoadWeather = vcordDB.FetchAll('myGeo');
			
			//gets the total count of weather forecast history from the Local storage.
			$scope.WeatherCount = vcordDB.Count('myGeo');

			/**
			* Uses the Html5 geolocation api to fetch user's current weather from
			* openwaether API and broadcast's the showWeather event.
			*/
			$scope.getLocation = function(){

			findme.now().then(function(position){
			var data = position.coords;


			//checks if is there has been a forecast made with this device.
			if(vcordDB.Count('myGeo') < 0 || !vcordDB.Count('myGeo')) 
			{
			// if not, trigger the show weather event. and use the openweather API to fetch current weather,
			// and broadcast the ShowWeather event.
			$http.jsonp($rootScope.API.openweather.url, {params:{lat: data.latitude, lon: data.longitude, appid:$rootScope.API.openweather.key, callback: 'JSON_CALLBACK'}})
			.then(function(response){
			$scope.$broadcast('ShowWeather', response.data);
			});

			}else{

			//if there has been a forecast, trigger a warning, asking the user to check waether manually.
			toastr.warning('Oops!! you already have a History, Please check your weather manually!');
			}

			},function(err){

			//checks if the browser supports HTML5 geolocation API.
			if(err === false)

			{
			toastr.warning('Your browser does not support Html5 Geolocation API');
			}

			/**
			* check if the user rejects the HTML5 geolocation API.
			*/

			if(err === 1)
			{
			//if there has been a forecast, trigger a warning, asking the user to check waether manually.
			if(vcordDB.Count('myGeo') < 0 || !vcordDB.Count('myGeo'))
			{
			//if not, triggers the UserReject event
			return $scope.$broadcast('UserReject', 'rejected'); 
			}else{

			toastr.warning('Oops!! you already have a History, Please check your weather manually!');
			}
			}

			if(err === 2)//checks if HTML5 geolocation API is available, probably due to bad internet connection.

			{
			toastr.warning('Your current position is not available. Please check your internet connection.');
			}

			});

			};


			/**
			* listens to the saveWeather event
			* and saves the weather Data to the localstorage in Json Format and reloads the browser.
			*/
			$scope.SaveWeather = function()
			{
			$scope.$on('saveWeather', function(evt, data){
			vcordDB.table('myGeo');

			var fields = {
			ref_id: $scope.uniqeId(10),
			location: data.name,
			weather:$scope.ToCelcius(data.main.temp),
			wind:$scope.ToKilometer(data.wind.speed),
			humidity: data.main.humidity,
			description: data.weather[0].description,
			date: new Date()
			};

			vcordDB.Insert('myGeo', fields);
			$window.location.reload();
			});
			};

			//clears all weather history
			$scope.clearHistory = function()
			{
			vcordDB.DeleteAll('myGeo');

			$window.location.reload();

			};

			//scope to for implementing the Kelvin to Celsius method.
			$scope.ToCelcius = function(val)
			{
			var result = val - 273.15;
			var appr = Math.round(result);
			return appr;
			};

			//scope to for implementing the Meter to Kilometer method.
			$scope.ToKilometer = function(val)
			{
			var result = val * 3.60;
			var approx = Math.round(result * 100)/100;
			return approx;
			};


			//method for generating a unique string. used for the RefId
			$scope.uniqeId = function randomstring(L)
			{
			var s= '';
			var randomchar=function(){
			var n= Math.floor(Math.random()*62);
			if(n<10)
				return n; //1-10
			if(n<36)
				return String.fromCharCode(n+55); //A-Z
				return String.fromCharCode(n+61); //a-z
			
			};
			while(s.length< L)
				s+= randomchar();
				return s;
			
			};


			$scope.SaveWeather();

});
