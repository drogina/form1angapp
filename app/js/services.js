'use strict';

/* Services */

angular.module('F1FeederApp.services', [])
	.factory('ergastAPIservice', function($http) {
		var ergastAPI = {};

		ergastAPI.getDrivers = function() {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getDriverDetails = function(id) {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/driverStandings.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getDriverRaces = function(id) {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/results.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getTeamRaces = function(id) {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/constructors/' + id + '/results.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getTeamDrivers = function(id) {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/constructors/' + id + '/drivers.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getTeamDetails = function(id) {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/constructors/' + id + '/constructorStandings.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getTeams = function() {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/constructorStandings.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getRaces = function() {
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/results/1.json?callback=JSON_CALLBACK'
			});
		}

		return ergastAPI;
	});

