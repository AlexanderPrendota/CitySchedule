var app = angular.module ('MySchedule', ['ngDialog','city-directives']);

app.controller("ScheduleController", ['$http', 'ngDialog', '$scope',function ($http, ngDialog,$scope) {
    var schedule = this;
    schedule.data = [];
    schedule.cities = [];

    $http.get ('cities-data.json').success (function (data) {
        schedule.cities = data;
    });

    schedule.mess = function (city) {
        console.log(city);

        $http.get("http://37.139.26.89:8080/schedule/station/" + city).success(function (response) {
            schedule.data =  response;
            console.log(schedule.data);
        });

        ngDialog.open({
            template: 'schedule.html',
            scope: $scope
        });
    };
}]);
