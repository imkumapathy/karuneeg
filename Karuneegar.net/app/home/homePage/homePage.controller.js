var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var HomePageController = (function () {
            function HomePageController($http) {
                this.$http = $http;
            }
            HomePageController.prototype.$onInit = function () {
            };
            return HomePageController;
        }());
        HomePageController.$inject = ["$http"];
        Home.HomePageController = HomePageController;
        Karuneegar.app.controller("HomePageController", HomePageController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=homePage.controller.js.map