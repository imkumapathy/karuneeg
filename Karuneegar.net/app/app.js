var Karuneegar;
(function (Karuneegar) {
    Karuneegar.app = angular.module("karuneegar", ["ui.router", "ui.grid", 'localytics.directives']);
    Karuneegar.app.config([
        "$stateProvider", "$urlRouterProvider", "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home", {
                controller: "HomeController",
                controllerAs: "$ctrl",
                templateUrl: "app/home/home.html"
            });
            $locationProvider.html5Mode(true);
        }
    ]);
})(Karuneegar || (Karuneegar = {}));
