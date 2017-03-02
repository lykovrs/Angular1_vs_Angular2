'use strict';

/**
 * @ngdoc function
 * @name angular1CalendarApp.controller:calendarCtrl
 * @description
 * # calendarCtrl
 * Controller of the angular1CalendarApp
 */
angular.module('angular1CalendarApp')
  .controller('calendarCtrl', function ($scope) {

    $scope.cells = 15;
    $scope.colls = 24;

    $scope.loadData = function (num) {
      $scope.render()
      $scope.load()
    }

    $scope.render = function () {

      this.days = [];
      this.hours = [];

      for (var i = 1; i <= this.cells; i++) {
        this.days.push("Oct " + i)
      }
      for (var j = 0; j <= this.colls; j++) {
        this.hours.push(j)
      }
    }

    $scope.load = function () {
      $scope.isLoaded = true;
    }

    // $scope.searchAll = function() {
    //   $scope.$broadcast('allSearchRequested');
    // }

    $scope.dayHeaderClicked = function () {
      alert('dayHeaderClicked()');
    }

  });
