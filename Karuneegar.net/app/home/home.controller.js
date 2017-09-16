var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var HomeController = (function () {
            function HomeController($http, karuneegarDataService) {
                this.$http = $http;
                this.karuneegarDataService = karuneegarDataService;
                this.loadHomePage = true;
                this.loadGroomPage = false;
                this.loadBridePage = false;
            }
            HomeController.prototype.$onInit = function () {
                var instance = this;
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
            };
            HomeController.prototype.loadGroom = function () {
                this.loadDefaultValue();
                this.loadGroomPage = true;
            };
            HomeController.prototype.loadBride = function () {
                this.loadDefaultValue();
                this.loadBridePage = true;
            };
            HomeController.prototype.loadHome = function () {
                this.loadDefaultValue();
                this.loadHomePage = true;
            };
            HomeController.prototype.loadDefaultValue = function () {
                this.loadGroomPage = false;
                this.loadHomePage = false;
                this.loadBridePage = false;
            };
            return HomeController;
        }());
        HomeController.$inject = ["$http", "KaruneegarDataService"];
        Home.HomeController = HomeController;
        Karuneegar.app.controller("HomeController", HomeController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
