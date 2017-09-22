module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    import DataService = Karuneegar.DataService.IKaruneegarDataService;
    import LocationService = angular.ILocationService;

    export class MatrimonyController implements ng.IComponentController {
        static $inject = ["$location"];

        constructor(private $location: LocationService) {

        }

        buttonClicked (path) {
            this.$location.path(path);
        };

        initalSetup() {
            let instance = this;                     
           
        }
        
        $onInit() {
          
        
        }
    }

    app.controller("MatrimonyController", MatrimonyController);
}