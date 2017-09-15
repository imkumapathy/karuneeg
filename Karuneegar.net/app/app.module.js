var Karuneegar;
(function (Karuneegar) {

    Karuneegar.app = angular.module("karuneegar", ["ui.router"]);
    Karuneegar.app.config([
        "$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home", {
                    controller: "HomeController",
                    controllerAs: "$ctrl",
                    templateUrl: "app/home/home.html"
                })
            //.state("upload", {
            //    //url: "/upload?mapSetId",
            //    url: "/upload?mapSetId",
            //    template: "<upload-workflow></upload-workflow>"
            //})
            //.state("raster", {
            //    url: "/raster/{mapId:int}",
            //    controller: "RasterController",
            //    templateUrl: "app/raster/raster.html"
            //});

            $locationProvider.html5Mode(true);
        }
    ]);
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=app.js.map