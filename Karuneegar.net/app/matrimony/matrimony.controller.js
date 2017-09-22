var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var MatrimonyController = (function () {
            function MatrimonyController($location) {
                this.$location = $location;
            }
            MatrimonyController.prototype.buttonClicked = function (path) {
                this.$location.path(path);
            };
            ;
            MatrimonyController.prototype.initalSetup = function () {
                var instance = this;
            };
            MatrimonyController.prototype.$onInit = function () {
            };
            return MatrimonyController;
        }());
        MatrimonyController.$inject = ["$location"];
        Home.MatrimonyController = MatrimonyController;
        Karuneegar.app.controller("MatrimonyController", MatrimonyController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=matrimony.controller.js.map