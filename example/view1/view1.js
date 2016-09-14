'use strict';

angular.module('myApp')

.config(function($stateProvider) {
        $stateProvider.state('view1', {
            url:'/view1',
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
})

.controller('View1Ctrl', function($scope,$state,$locale) {
      $scope.modifiedAt = new Date();
        $scope.modifiedAtTitle = moment($scope.modifiedAt).format("LL");
        var formatDayTitle = 'MMMM yyyy';
        var localFormat = $locale.DATETIME_FORMATS.mediumDate;
        if (localFormat.indexOf('y') < localFormat.indexOf('M')) {
            formatDayTitle = 'yyyy MMMM';
        }
        $scope.dueDateOptions = {
            isOpen: false,
            minDate: Date.now(),
            popupFormat: 'yyyy/MM/dd',
            startingDay: 1,
            showWeeks: false,
            showButtonBar: false,
            'format-day-title': formatDayTitle
        };
        $scope.$watch('dueDate',function(newValue, oldValue){
            if (newValue == undefined || newValue =='') {

            } else {
                $scope.dueDate2 = moment(newValue).format('LL');

            }

        });
        $scope.toggleDatePicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.dueDateOptions.isOpen = !$scope.dueDateOptions.isOpen;
        };
    });