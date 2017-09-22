module Karuneegar {
    import StateProvider = angular.ui.IStateProvider;
    import UrlRouterProvider = angular.ui.IUrlRouterProvider;
    import LocationProvider = angular.ILocationProvider;
    import RouterProvider = angular.route.IRouteProvider;
    export var app = angular.module("karuneegar", ["ui.router", "ui.grid", 'localytics.directives', 'ngRoute']);

    app.config([
        "$stateProvider", "$urlRouterProvider", "$locationProvider", "$routeProvider",
        ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider, $locationProvider: LocationProvider, $routeProvider: RouterProvider) => {
            $urlRouterProvider.otherwise("/home");
            $urlRouterProvider.when('', "/home");
            $stateProvider
                .state("home",
                {
                    url: '/home',
                    controller: "HomeController",
                    controllerAs: "$ctrl",
                    //template: "<home/>"
                    templateUrl: "app/home/home.html"
                })
                .state("matrimony",
                {
                    url: "/matrimony",

                    controller: "HomeController",
                    controllerAs: "$ctrl",
                    //template: "<home/>"
                    templateUrl: "app/home/home.html"
                }).state("aboutus",
                {
                    url: "/aboutus",
                    controller: "HomeController",
                    controllerAs: "$ctrl",
                    templateUrl: "app/home/home.html"
                })
                .state("matrimony/bride",
                {
                    url: "/matrimony/bride",

                    controller: "HomeController",
                    controllerAs: "$ctrl",
                    //template: "<home/>"
                    templateUrl: "app/home/home.html"
                })
                .state("matrimony/groom",
                {
                    url: "/matrimony/groom",

                    controller: "HomeController",
                    controllerAs: "$ctrl",
                    //template: "<home/>"
                    templateUrl: "app/home/home.html"
                })
                ;

            $locationProvider.hashPrefix('');
            //$locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            //})
            //$locationProvider.html5Mode(true);
        }
    ]);
}