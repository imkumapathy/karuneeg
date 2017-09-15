var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var HomeController = (function () {
            function HomeController($http) {
                this.$http = $http;
            }
            HomeController.prototype.$onInit = function () {
            };
            HomeController.prototype.loadHome = function () {
                this.home = true;
                this.groom = false;
            };
            HomeController.prototype.loadGroom = function () {
                this.home = false;
                this.groom = true;
            };
            return HomeController;
        }());
        HomeController.$inject = ["$http"];
        Home.HomeController = HomeController;
        Karuneegar.app.controller("HomeController", HomeController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
