'use strict';
angular
    .module('angular1CalendarApp', [
    'ngRoute'
])
    .config(function ($routeProvider) {
    $routeProvider
        .otherwise({
        redirectTo: '/'
    });
});
angular.module('angular1CalendarApp')
    .controller('calendarCellCtrl', function ($scope, $timeout) {
    $scope.status = {};
    $scope.randomMillis = function () {
        return Math.floor(Math.random() * 500);
    };
    $scope.cellClicked = function () {
        delete $scope.status.searchResults;
        $scope.status.isSearching = true;
        $timeout(function () {
            $scope.status.isSearching = false;
            $scope.status.searchResults = {
                options: Math.floor(Math.random() * 5)
            };
        }, $scope.randomMillis());
    };
    $scope.$on('allSearchRequested', function () {
        $scope.cellClicked();
    });
    $scope.showSpinner = function () {
        return $scope.status.isSearching;
    };
    $scope.hideSpinner = function () {
        return !$scope.status.isSearching;
    };
    $scope.showHour = function () {
        return !$scope.status.isSearching && !$scope.status.searchResults;
    };
    $scope.showSearchResults = function () {
        return $scope.status.searchResults;
    };
});
'use strict';
angular.module('angular1CalendarApp')
    .controller('calendarCtrl', function ($scope) {
    $scope.cells = 15;
    $scope.colls = 24;
    $scope.loadData = function (num) {
        $scope.render();
        $scope.load();
    };
    $scope.render = function () {
        this.days = [];
        this.hours = [];
        for (var i = 1; i < this.cells; i++) {
            this.days.push("Oct " + i);
        }
        for (var j = 0; j < this.colls; j++) {
            this.hours.push(j);
        }
    };
    $scope.load = function () {
        $scope.isLoaded = true;
    };
    $scope.dayHeaderClicked = function () {
        alert('dayHeaderClicked()');
    };
});
'use strict';
angular.module('angular1CalendarApp')
    .directive('calendar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/calendar.html',
        controller: 'calendarCtrl'
    };
});
'use strict';
angular.module('angular1CalendarApp')
    .directive('calendarcell', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/calendarcell.html',
        controller: 'calendarCellCtrl',
        scope: {
            hour: '=',
            day: '='
        }
    };
});
