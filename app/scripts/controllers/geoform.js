'use strict';

/**
* The GeoFormCtrl
* Handles modal form related features.
*/

angular.module('4castApp')
.controller('GeoformCtrl', function ($scope, $rootScope, $http) {

		$scope.formGeoLocate = {};

		/**
		* Auto suggests placea, address, zipcode on input.
		* fetches Data from google map api.
		*/

		$scope.getLocation = function(val) {
		return $http.get($rootScope.API.google.url, {
		params: {
		address: val,
		sensor: false,
		key: $rootScope.API.google.key
		}
		}).then(function(response){
		return response.data.results.map(function(item){
		$scope.formGeoLocate = item.geometry.location;
		return item.formatted_address;
		});
		});
		};


		/**
		* fetches the current weatheer from the openWeather API and 
		* emits the showWeather event to pass the response around.
		*/

		$scope.showWeather = function(data)
		{
		$http.jsonp($rootScope.API.openweather.url, {params:{lat: data.lat, lon: data.lng, appid:$rootScope.API.openweather.key, callback: 'JSON_CALLBACK'}})
		.then(function(response){
		$scope.$emit('ShowWeather', response.data);
		});

		};

});
