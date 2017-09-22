var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var HomeComponent = (function () {
            function HomeComponent() {
                this.bindings = {};
                this.templateUrl = "app/home/home.html";
                this.controller = "HomeController";
            }
            return HomeComponent;
        }());
        Karuneegar.app.component("home", new HomeComponent());
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=home.component.js.map