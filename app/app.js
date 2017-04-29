var app = angular.module ('MySchedule', []);

app.controller("ScheduleController", ['$http', function ($http) {
    var schedule = this;
    schedule.data = [];

    $http.get("http://localhost:8080/schedule/todays").success(function (response) {
        schedule.data =  response;
    });

    schedule.mess = function () {
        console.log(schedule.data);
    };

}]);
