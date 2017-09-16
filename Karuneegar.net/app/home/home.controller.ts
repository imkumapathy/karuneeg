module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    import DataService = Karuneegar.DataService.IKaruneegarDataService;
    export class HomeController implements ng.IComponentController {
        static $inject = ["$http", "KaruneegarDataService"];

        constructor(private $http: HttpService, private karuneegarDataService: DataService) {
        }


        loadHomePage = true;
        loadGroomPage = false;
        loadBridePage = false;
        brideData: any;
        groomData: any;

        starTypes: string[];

        $onInit() {
            let instance = this;
            this.karuneegarDataService.getBrideDetails().then(function (response) {
                instance.brideData = response.feed.entry;
                console.log("bride data...");
                console.log(instance.brideData);
            });

            this.karuneegarDataService.getGroomDetails().then(function (response) {
                instance.groomData = response.feed.entry;
                console.log("groom data...");
                console.log(instance.groomData);
            });

            this.starTypes = this.karuneegarDataService.getStars();
            console.log("star types...");
            console.log(this.starTypes);
        }

        loadGroom() {
            this.loadDefaultValue();
            this.loadGroomPage = true;
        }

        loadBride() {
            this.loadDefaultValue();
            this.loadBridePage = true;
        }

        loadHome() {
            this.loadDefaultValue();
            this.loadHomePage = true;

        }

        loadDefaultValue() {
            this.loadGroomPage = false;
            this.loadHomePage = false;
            this.loadBridePage = false;
        }
    }

    app.controller("HomeController", HomeController);
}