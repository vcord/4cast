'use strict';

/**
 * @ngdoc service
 * @name 4castApp.findme
 * @description
 * # findme
 * Service in the 4castApp.
 */
angular.module('4castApp')
  .service('findme', function ($log, $http, $q, $window, $timeout) {
   
   var locator={};
   
   locator.now = function()
             {
                 var deferred;
                 
                 var promiseTimeout = $timeout(function() {
                     deferred.reject(1); // return 1 if browser waited for user input for more than timeout delay
                    }, 5000);
                 
						deferred = $q.defer();
                 
                 // check if geoLocation is not supported by browser
                 if(!$window.navigator.geolocation) { 
                        $timeout.cancel(promiseTimeout);
                     
                     // return false if geoLocation is not supported
                        deferred.reject(false); 
                     
                    }else{
                     
                     //Fires the HTML5 Geolocation API
                     $window.navigator.geolocation.getCurrentPosition(
                         
                    //resolves the geolocation response.
                    function(position) {
                        $timeout.cancel(promiseTimeout);
                        return deferred.resolve(position);
                    }, 
                    
                    //Resolves the Geolocation Error.
                    function(error) {
                        $timeout.cancel(promiseTimeout);
                        return deferred.reject(error.code || 1);
                    },
                      
                    //sets the HTML5 geolocation optional features.
                      {
                     enableHighAccuracy : true,
                        timeout : Infinity,
                        maximumAge : 0
                     }
                                                                      
                    );
                 }
                 
                 return deferred.promise;
             };
			 
			 return locator;
   
  });
