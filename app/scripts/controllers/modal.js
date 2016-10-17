'use strict';


/**
* The ModalCtrl
* Implements the bootstrap modal.
*/
angular.module('4castApp')
.controller('ModalCtrl', function ($scope, $uibModal, $document, $rootScope) {

			/**
			* implements the country search and place modal<pop up>
			* listens to the UserReject event and pops up.
			*/

			$scope.showReject = function()
			{
			$scope.$on("UserReject", function(evt,data){
			var modalInstance = $uibModal.open({
			backdrop:'static',
			templateUrl: 'views/partials/modal_home.html',
			size: 'sm',
			controller: 'ModalinstanceCtrl',

			});
			});
			};


			/**
			* implements the normal country search modal.
			*/

			$scope.showManual = function()
			{
			var modalInstance = $uibModal.open({
			templateUrl: 'views/partials/modal_home.html',
			size: 'sm',
			controller: 'ModalinstanceCtrl',

			});
			};

			/**
			* implements the recent weather modal.
			* listens to the showWeather event.
			*/

			$scope.showWeatherForm = function()
			{
			$scope.$on("ShowWeather", function(evt,data){
			$rootScope.weatherData = data;
			var modalInstance = $uibModal.open({
			backdrop:'static',
			templateUrl: 'views/partials/modal_weather.html',
			size: 'sm',
			controller: 'ModalinstanceCtrl',
			});

			});

			};

			$scope.showReject();
			$scope.showWeatherForm();
});
