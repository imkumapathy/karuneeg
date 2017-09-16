var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var HomePageComponent = (function () {
            function HomePageComponent() {
                this.bindings = {};
                this.templateUrl = "app/home/homePage/homePage.html";
                this.controller = "HomePageController";
            }
            return HomePageComponent;
        }());
        Karuneegar.app.component("homePage", new HomePageComponent());
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
