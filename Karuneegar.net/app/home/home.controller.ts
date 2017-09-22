module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    import DataService = Karuneegar.DataService.IKaruneegarDataService;
    import StateService = angular.ui.IStateService;
    export class HomeController implements ng.IComponentController {
        static $inject = ["$http", "$state"];

        constructor(private $http: HttpService, private $state: StateService) {
        }

        activeMenu = "Home";
        loadHomePage = true;
        loadMatrimonyPage = false;
        loadAboutUsPage = false;
        loadContactPage = false;
        loadMatrimonySearchPage = false;
        isBride = false;
        brideData: any;
        groomData: any;
        showMenuItem = false;
        starTypes: string[];

        $onInit() {                     
            this.processCurrentState();
        }

        processCurrentState() {
            let currentState = this.$state.current;
            if (currentState.name == "matrimony") {
                this.loadMatrimony();
            }
            else if (currentState.name == "aboutus") {
                this.loadAboutUs();
            }
            else if (currentState.name == "matrimony/groom") {
                this.loadMatrimonySearch();
                this.isBride = false;

            }
            else if (currentState.name == "matrimony/bride") {
                this.loadMatrimonySearch();
                this.isBride = true;
            }
            else {
                this.loadHome();
            }
        }
      
        loadMatrimony() {
            this.loadDefaultValue();
            this.loadMatrimonyPage = true;
            this.activeMenu = "Matrimony";
        }

        loadHome() {
            this.loadDefaultValue();
            this.loadHomePage = true;
            this.activeMenu = "Home";

        }

        loadAboutUs() {
            this.loadDefaultValue();
            this.activeMenu = "About";
            this.loadAboutUsPage = true;
        }

        loadContact() {
            this.loadDefaultValue();
            this.activeMenu = "Contact";
            this.loadContactPage = true;
        }

        loadDefaultValue() {
            this.loadHomePage = false;
            this.loadMatrimonyPage = false;
            this.loadMatrimonySearchPage = false;
        }

        loadMatrimonySearch() {
            this.loadDefaultValue();
            this.loadMatrimonySearchPage = true;
            this.activeMenu = "Matrimony";
        }

        menuClick() {
            this.showMenuItem = !this.showMenuItem;
        }
    }

    app.controller("HomeController", HomeController);
}