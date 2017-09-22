var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var HomeController = (function () {
            function HomeController($http, $state) {
                this.$http = $http;
                this.$state = $state;
                this.activeMenu = "Home";
                this.loadHomePage = true;
                this.loadMatrimonyPage = false;
                this.loadAboutUsPage = false;
                this.loadContactPage = false;
                this.loadMatrimonySearchPage = false;
                this.isBride = false;
                this.showMenuItem = false;
            }
            HomeController.prototype.$onInit = function () {
                this.processCurrentState();
            };
            HomeController.prototype.processCurrentState = function () {
                var currentState = this.$state.current;
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
            };
            HomeController.prototype.loadMatrimony = function () {
                this.loadDefaultValue();
                this.loadMatrimonyPage = true;
                this.activeMenu = "Matrimony";
            };
            HomeController.prototype.loadHome = function () {
                this.loadDefaultValue();
                this.loadHomePage = true;
                this.activeMenu = "Home";
            };
            HomeController.prototype.loadAboutUs = function () {
                this.loadDefaultValue();
                this.activeMenu = "About";
                this.loadAboutUsPage = true;
            };
            HomeController.prototype.loadContact = function () {
                this.loadDefaultValue();
                this.activeMenu = "Contact";
                this.loadContactPage = true;
            };
            HomeController.prototype.loadDefaultValue = function () {
                this.loadHomePage = false;
                this.loadMatrimonyPage = false;
                this.loadMatrimonySearchPage = false;
            };
            HomeController.prototype.loadMatrimonySearch = function () {
                this.loadDefaultValue();
                this.loadMatrimonySearchPage = true;
                this.activeMenu = "Matrimony";
            };
            HomeController.prototype.menuClick = function () {
                this.showMenuItem = !this.showMenuItem;
            };
            return HomeController;
        }());
        HomeController.$inject = ["$http", "$state"];
        Home.HomeController = HomeController;
        Karuneegar.app.controller("HomeController", HomeController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=home.controller.js.map