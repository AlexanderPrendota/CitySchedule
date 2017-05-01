/**
 * Created by aleksandrprendota on 30.04.17.
 */
var app = angular.module ('city-directives', []);

app.directive ("cityGallery", function () {
    return {
        restrict:     "E",
        templateUrl:  "city-gallery.html",
        controller:   function () {
            // your function :з
        },
        controllerAs: "gallery"
    };
});