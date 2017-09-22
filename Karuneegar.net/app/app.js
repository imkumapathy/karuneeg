var Karuneegar;
(function (Karuneegar) {
    Karuneegar.app = angular.module("karuneegar", ["ui.router", "ui.grid", 'localytics.directives', 'ngRoute']);
    Karuneegar.app.config([
        "$stateProvider", "$urlRouterProvider", "$locationProvider", "$routeProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
            $urlRouterProvider.otherwise("/home");
            $urlRouterProvider.when('', "/home");
            $stateProvider
                .state("home", {
                url: '/home',
                controller: "HomeController",
                controllerAs: "$ctrl",
                //template: "<home/>"
                templateUrl: "app/home/home.html"
            })
                .state("matrimony", {
                url: "/matrimony",
                controller: "HomeController",
                controllerAs: "$ctrl",
                //template: "<home/>"
                templateUrl: "app/home/home.html"
            }).state("aboutus", {
                url: "/aboutus",
                controller: "HomeController",
                controllerAs: "$ctrl",
                templateUrl: "app/home/home.html"
            })
                .state("matrimony/bride", {
                url: "/matrimony/bride",
                controller: "HomeController",
                controllerAs: "$ctrl",
                //template: "<home/>"
                templateUrl: "app/home/home.html"
            })
                .state("matrimony/groom", {
                url: "/matrimony/groom",
                controller: "HomeController",
                controllerAs: "$ctrl",
                //template: "<home/>"
                templateUrl: "app/home/home.html"
            });
            $locationProvider.hashPrefix('');
            //$locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            //})
            //$locationProvider.html5Mode(true);
        }
    ]);
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=app.js.map