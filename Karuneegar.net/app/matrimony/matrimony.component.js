var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var MatrimonyComponent = (function () {
            function MatrimonyComponent() {
                this.bindings = {
                    data: "<",
                    stars: "<"
                };
                this.templateUrl = "app/matrimony/matrimony.html";
                this.controller = "MatrimonyController";
            }
            return MatrimonyComponent;
        }());
        Karuneegar.app.component("matrimony", new MatrimonyComponent());
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=matrimony.component.js.map