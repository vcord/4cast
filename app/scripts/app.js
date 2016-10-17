'use strict';
/**
* APP NAME: MYGEO
* @author vcord ukandu michael <vcordukandu@gmail.com>
* @url https://github.com/vcord/mygeo
* @desc A simple application for readin user's current weather condition and also useful for general weather forecast. This           * application stores forecast history in the local storage.
*/
angular
  .module('4castApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ui.router', 
    'ngSanitize',
    'ngTouch',
	'angular-loading-bar',
	'angularMoment',
	'toastr',
	'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
	  $locationProvider.html5Mode(true);
	  $stateProvider
		.state('home', {
		url : '/',
		controller:'GeoCtrl',
		templateUrl: 'views/main.html'
		});
		$urlRouterProvider.otherwise("/");
		
		 cfpLoadingBarProvider.includeSpinner = true;
         cfpLoadingBarProvider.includeBar = true;
  })
  
  .run(function($rootScope) {
    $rootScope.API = {
		google:{
            key:'AIzaSyBKk8Dtb_C-fwCH9A61Fp_utGCHPx-reFA',
            url:'https://maps.googleapis.com/maps/api/geocode/json',
        },
		
		openweather: {
            key:'93be51540090e5825beb7296aa0b1394',
            url:'http://api.openweathermap.org/data/2.5/weather'
        }
	};
	
	
});
