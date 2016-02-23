'use strict';

angular.module('Home')

.controller('HomeController', ['$scope', 'goalkprfactory', 'defendersfactory', 'midfieldersfactory', function ($scope, goalkprfactory, defendersfactory, midfieldersfactory) {

		// getting the all objects for player with position
		$scope.goalPersons = goalkprfactory.goalfacFunc();
		// console.log($scope.goalPersons);
		$scope.dfndrPersons = defendersfactory.dfndrfacFunc();
		$scope.midfldPersons = midfieldersfactory.mdfldfunc();

		// goalkpr selection
		$scope.selection=[];
		// toggle selection for a given goalkpr by name
		$scope.toggleSelection = function toggleSelection(goalPersons) {
		     var idx = $scope.selection.indexOf(goalPersons);
		 
		     // is currently selected
		     if (idx > -1) {
		       $scope.selection.splice(idx, 1);
		     }
		 
		     // is newly selected
		     else {
		       $scope.selection.push(goalPersons);
		     }
		};


		// dfndr selection
		$scope.selectiond=[];
		// toggle selection for a given dfndr by name
		$scope.toggleSelectiond = function toggleSelection(dfndrPersons) {
		     var idx = $scope.selectiond.indexOf(dfndrPersons);
		 
		     // is currently selected
		     if (idx > -1) {
		       $scope.selectiond.splice(idx, 1);
		     }
		 
		     // is newly selected
		     else {
		       $scope.selectiond.push(dfndrPersons);
		     }
		};



		// mdfldr selection
		$scope.selectionm=[];
		// toggle selection for a given mdfldr by name
		$scope.toggleSelectionm = function toggleSelection(midfldPersons) {
		     var idx = $scope.selectionm.indexOf(midfldPersons);
		 
		     // is currently selected
		     if (idx > -1) {
		       $scope.selectionm.splice(idx, 1);
		     }
		 
		     // is newly selected
		     else {
		       $scope.selectionm.push(midfldPersons);
		     }
		};






}]);