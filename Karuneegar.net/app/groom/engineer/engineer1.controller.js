var Karuneegar;
(function (Karuneegar) {
    var BrideEngineer;
    (function (BrideEngineer) {
        var BrideEngineerController = (function () {
            function BrideEngineerController($http) {
                $http.get("https://spreadsheets.google.com/feeds/list/1YLUVMbVsqhLtEZkMWSpUtpvrSEn1VFfk7OevnuYcrbY/od6/public/values?alt=json")
       .then(function (response) {
           vm.tools = response.data.feed.entry;
       });
            };

            BrideEngineerController.prototype.$onInit = function () {
            };
            return BrideEngineerController;
        }());
        BrideEngineerController.$inject = ["$http"];
        BrideEngineer.BrideEngineerController = BrideEngineerController;
        Karuneegar.app.controller("BrideEngineerController", BrideEngineerController);
    })(BrideEngineer = Karuneegar.BrideEngineer || (Karuneegar.BrideEngineer = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=home.controller.js.map