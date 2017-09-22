var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var MatrimonySearchComponent = (function () {
            function MatrimonySearchComponent() {
                this.bindings = {
                    isbride: "<"
                };
                this.templateUrl = "app/matrimony/matrimonySearch/matrimonySearch.html";
                this.controller = "MatrimonySearchController";
            }
            return MatrimonySearchComponent;
        }());
        Karuneegar.app.component("matrimonySearch", new MatrimonySearchComponent());
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=matrimonySearch.component.js.map