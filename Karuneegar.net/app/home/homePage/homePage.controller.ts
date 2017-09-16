module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    export class HomePageController implements ng.IComponentController {
        static $inject = ["$http"];
        tools: any[];
        gridOptions: any;

        constructor(private $http: HttpService) {
        }

        $onInit() {
         
        }
    }

    app.controller("HomePageController", HomePageController);
}