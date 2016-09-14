'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'angularMoment'
]).config(function($locationProvider, $stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/view1');
})
.run(function($rootScope, $window, $locale) {
      if ($locale.DATETIME_FORMATS.STANDALONEMONTH) {
        $locale.DATETIME_FORMATS.BACKUPMONTH = $locale.DATETIME_FORMATS.MONTH;
        $locale.DATETIME_FORMATS.MONTH = $locale.DATETIME_FORMATS.STANDALONEMONTH;
      }

});
