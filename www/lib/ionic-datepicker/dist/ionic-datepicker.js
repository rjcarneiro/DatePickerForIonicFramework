"use strict";angular.module("ionic-datepicker",["ionic","ionic-datepicker.templates"]).directive("ionicDatepicker",["$ionicPopup",function(e){return{restrict:"AE",replace:!0,scope:{ipDate:"=idate"},link:function(t,n){var a=["January","February","March","April","May","June","July","August","September","October","November","December"],r=angular.copy(t.ipDate);t.weekNames=["S","M","T","W","T","F","S"];var o=function(e){r=angular.copy(e);var n=new Date(e.getFullYear(),e.getMonth(),1).getDate(),o=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();t.dayList=[];for(var l=n;o>=l;l++){var c=new Date(e.getFullYear(),e.getMonth(),l);t.dayList.push({date:c.getDate(),month:c.getMonth(),year:c.getFullYear(),day:c.getDay(),dateString:c.toString(),epochLocal:c.getTime(),epochUTC:c.getTime()+60*c.getTimezoneOffset()*1e3})}for(var n=t.dayList[0].day,i=0;n>i;i++)t.dayList.unshift({});t.rows=[],t.cols=[],t.currentMonth=a[e.getMonth()],t.currentYear=e.getFullYear(),t.numColumns=7,t.rows.length=6,t.cols.length=t.numColumns};t.prevMonth=function(){1===r.getMonth()&&r.setFullYear(r.getFullYear()),r.setMonth(r.getMonth()-1),t.currentMonth=a[r.getMonth()],t.currentYear=r.getFullYear(),o(r)},t.nextMonth=function(){11===r.getMonth()&&r.setFullYear(r.getFullYear()),r.setMonth(r.getMonth()+1),t.currentMonth=a[r.getMonth()],t.currentYear=r.getFullYear(),o(r)},t.date_selection={selected:!1,selectedDate:"",submitted:!1},t.dateSelected=function(e){t.selctedDateString=e.dateString,t.date_selection.selected=!0,t.date_selection.selectedDate=new Date(e.dateString)},n.on("click",function(){o(angular.copy(t.ipDate)),e.show({templateUrl:"date-picker-modal.html",title:"<strong>Select Date</strong>",subTitle:"",scope:t,buttons:[{text:"Cancel"},{text:"Set",type:"button-positive",onTap:function(e){t.date_selection.submitted=!0,t.date_selection.selected===!0?t.ipDate=angular.copy(t.date_selection.selectedDate):e.preventDefault()}}]})})}}}]);