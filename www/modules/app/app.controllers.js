angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope, ionicDatePicker) {

    $scope.selectedDate1;
    $scope.selectedDate2;
    $scope.selectedDate3;
    $scope.dataObj;

    $scope.openDatePickerOne = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker popup is : ' + val, new Date(val));
          $scope.selectedDate1 = new Date(val);
        },
        disabledDates: [
          new Date(2016, 2, 16),
          new Date(2015, 3, 16),
          new Date(2015, 4, 16),
          new Date(2015, 5, 16),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-16-2016"),
          new Date(1439676000000)
        ],
        from: new Date(2012, 1, 1),
        to: new Date(2018, 10, 30),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [],
        closeOnSelect: false,
        templateType: 'popup'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    };

    $scope.openDatePickerTwo = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker modal is : ' + val, new Date(val));
          $scope.selectedDate2 = new Date(val);
        },
        disabledDates: [
          new Date(1437719836326),
          new Date(2016, 1, 25),
          new Date(2015, 7, 10),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-14-2015"),
          new Date(1439676000000),
          new Date(1456511400000)
        ],
        from: new Date(2012, 8, 2),
        to: new Date(2018, 8, 25),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [0, 6],
        showTodayButton: false,
        closeOnSelect: false,
        templateType: 'modal'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    };

    $scope.openDatePickerThree = function () {
      var ipObj1 = {
        callback: function (result) {  //Mandatory
          console.log('Return value from the datepicker inline is : ' + result, new Date(result));
          $scope.selectedDate3 = new Date(result);
        },
        disabledDates: [
          new Date(1437719836326),
          new Date(2016, 1, 25),
          new Date(2015, 7, 10),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-14-2015"),
          new Date(1439676000000),
          new Date(1456511400000)
        ],
        from: new Date(2012, 8, 2),
        to: new Date(2018, 8, 25),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [0, 6],
        showTodayButton: false,
        closeOnSelect: true,
        templateType: 'inline'
      };
      $scope.dataObj = ipObj1;
      ionicDatePicker.openDatePicker(ipObj1);

      var today = new Date();
      var events = [];
      events.push({
        type: "Event 1",
        color: "#ef0001",
        date: today,
        disabled: false,
        extra: "Another text"
      });
      var tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      events.push({
        type: "Event 2",
        color: "#000099",
        date: tomorrow,
        disabled: false,
        extra: "Another text too"
      });
      var twoDaysAfter = new Date();
      twoDaysAfter.setDate(today.getDate() + 2);
      events.push({
        type: "Event 2",
        color: "#000099",
        date: twoDaysAfter,
        disabled: false,
        extra: "Event 2 extra text"
      });
      events.push({
        type: "Event 3",
        color: "#ff9900",
        date: twoDaysAfter,
        disabled: false,
        extra: "Another text too"
      });
      var twoDaysAfterOther = new Date();
      twoDaysAfterOther.setDate(today.getDate() + 3);
      events.push({
        type: "Event 3",
        color: "#ff9900",
        date: twoDaysAfterOther,
        disabled: true,
        extra: "Another text too"
      });
      setTimeout(function () {
        if ($scope.dataObj.setEvents) {
          $scope.dataObj.setEvents(events);
          $scope.$apply();
        }
      }, 0);
    };

  })

  .controller('ListCtrl', function ($scope) {

  })

  .controller('ContactCtrl', function ($scope) {

  });
