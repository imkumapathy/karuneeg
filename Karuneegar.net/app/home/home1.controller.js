var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var HomeController = (function () {
            function HomeController($http) {
                var vm = this;
                vm.food = 'pizza';

                $http.get("https://spreadsheets.google.com/feeds/list/1YLUVMbVsqhLtEZkMWSpUtpvrSEn1VFfk7OevnuYcrbY/od6/public/values?alt=json")
       .then(function (response) {
           console.log(response.data.feed.entry);
           vm.tools = response.data.feed.entry;
       });

            };

            HomeController.prototype.$onInit = function () {
            };


            HomeController.prototype.loadHome = function () {
                this.home = true;
                this.groom = false;
            }

            HomeController.prototype.loadGroom = function () {
                this.home = false;
                this.groom = true;
            }

            return HomeController;
        }());
        HomeController.$inject = ["$http"];
        Home.HomeController = HomeController;
        Karuneegar.app.controller("HomeController", HomeController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=home.controller.js.map