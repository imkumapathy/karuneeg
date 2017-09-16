var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var BrideComponent = (function () {
            function BrideComponent() {
                this.bindings = {
                    data: "<",
                    stars: "<"
                };
                this.templateUrl = "app/bride/bride.html";
                this.controller = "BrideController";
            }
            return BrideComponent;
        }());
        Karuneegar.app.component("bride", new BrideComponent());
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
