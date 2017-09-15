var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var GroomEngineerComponent = (function () {
            function GroomEngineerComponent() {
                this.bindings = {};
                this.templateUrl = "app/groom/engineer/engineer.html";
                this.controller = "EngineerController";
            }
            return GroomEngineerComponent;
        }());
        Karuneegar.app.component("groomEngineer", new GroomEngineerComponent());
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
