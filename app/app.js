var app = angular.module ('MySchedule', ['ngDialog']);

app.controller("ScheduleController", ['$http', 'ngDialog', '$scope',function ($http, ngDialog,$scope) {
    var schedule = this;
    schedule.data = [];

    schedule.mess = function (city) {
        console.log(city);

        $http.get("http://localhost:8080/schedule/todays").success(function (response) {
            schedule.data =  response;
            console.log(schedule.data);
        });

        ngDialog.open({
            template: 'schedule.html',
            scope: $scope
        });
    };
}]);
