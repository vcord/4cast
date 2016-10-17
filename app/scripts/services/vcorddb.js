'use strict';

/**
* @implements a simple local storage database.
* stores data in JSON format, immitating a real database.
*/
angular.module('4castApp')
  .service('vcordDB', function ($window) {
	  
	var DB = {};
	
	/**
        * @obj DB.table - creates the database table.
        * In actual sense, the local storage Key and sets an empty array as its value.
        */
             
         DB.table = function(table)
         {
             if(!$window.localStorage.getItem(table))
                 {
                    var setDb = {"db":[]};
                    var dbObj = JSON.stringify(setDb);
                    return  $window.localStorage.setItem(table, dbObj);
                     
                 }else{
                     
                     return false;
                 }
              
         };
		 
		 
		 /**
         * Implements the save Feature.
         * saves a new data in the localstorage array.
         * @param table - the table name
         * @param data - the new table value.
         */
         
         DB.Insert = function(table, data)
         {   
              var old_storage = $window.localStorage.getItem(table);
               var trans = JSON.parse(old_storage);
                var newItem = trans["db"].push(data);
                var filt = JSON.stringify(trans);
               $window.localStorage.setItem(table, filt);
             
         };
		 
		 /**
         * Implements the get feature
         * @returns all datas stored to a provided key; returns false if no table is found.
         */
         
         DB.FetchAll = function(table)
         {
             var storage = $window.localStorage.getItem(table);
             
             if(!storage)
                 {
                     return false;
                 }else{
                     var transform = JSON.parse(storage);
                     var arr = transform["db"];

                    return arr;
                 }
         };
         
         /**
         * returns the count of all stored data.
         */
         
         DB.Count = function(table)
         {
            var storage = $window.localStorage.getItem(table);
             
             if(!storage)
                 {
                     return false;
                 }else{
                     
                     var transformData = JSON.parse(storage);
                     var count = transformData.db.length;
                     
                     return count;
                 }
         };
         
         
         /**
         * Implements the delete functionality
         * deletes all data for a given table (key)
         */
         
         DB.DeleteAll = function(table)
         {
             var storage = $window.localStorage.getItem(table);
             
             if(!storage)
                 {
                     return false;
                 }else{
                     
                     var setDb = {"db":[]};
                    var dbObj = JSON.stringify(setDb);
                     
                     $window.localStorage.setItem(table, dbObj);
                 }
         };
		 
		 
		 return DB;
	
  });
