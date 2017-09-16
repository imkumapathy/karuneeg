module Karuneegar {
    import StateProvider = angular.ui.IStateProvider;
    import UrlRouterProvider = angular.ui.IUrlRouterProvider;
    import LocationProvider = angular.ILocationProvider;
    export var app = angular.module("karuneegar", ["ui.router", "ui.grid", 'localytics.directives']);

    app.config([
        "$stateProvider", "$urlRouterProvider", "$locationProvider",
        ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider, $locationProvider: LocationProvider) => {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home",
                {
                    controller: "HomeController",
                    controllerAs: "$ctrl",
                    templateUrl: "app/home/home.html"
                })

            $locationProvider.html5Mode(true);
        }
    ]);
}