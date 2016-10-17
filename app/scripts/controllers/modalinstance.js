'use strict';

/**
* implements the modal instance controller.
* responsible for closing the modal.
*/
angular.module('4castApp')
.controller('ModalinstanceCtrl', function ($scope, $rootScope, $uibModalInstance) {

			/**
			* closes the show weather modal broadcasting the saveWeather event.
			*/
			$scope.saveWeather = function (data) {
			$scope.$broadcast('saveWeather', data);
			$uibModalInstance.close();
			};

			/**
			* a re-usable method for closing any modal
			*/
			$scope.close = function()
			{
			$uibModalInstance.close();
			};


			/**
			* a re-usable method for cancelling any modal
			*/

			$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
			};

});
