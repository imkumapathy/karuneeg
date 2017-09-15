module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    export class HomeController implements ng.IComponentController {
        static $inject = ["$http"];

        constructor(private $http: HttpService) {
        }

        home: boolean;
        groom: boolean;

        $onInit() {

        }

        loadHome() {
            this.home = true;
            this.groom = false;
        }

        loadGroom() {
            this.home = false;
            this.groom = true;
        }
    }

    app.controller("HomeController", HomeController);
}