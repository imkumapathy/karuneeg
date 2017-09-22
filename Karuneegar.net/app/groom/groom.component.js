var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var GroomComponent = (function () {
            function GroomComponent() {
                this.bindings = {
                    data: "<",
                    stars: "<"
                };
                this.templateUrl = "app/groom/groom.html";
                this.controller = "GroomController";
            }
            return GroomComponent;
        }());
        Karuneegar.app.component("groom", new GroomComponent());
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=groom.component.js.map