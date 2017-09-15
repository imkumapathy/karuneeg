var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var EngineerController = (function () {
            function EngineerController($http) {
                this.$http = $http;
            }
            EngineerController.prototype.$onInit = function () {
                var instance = this;
                this.gridOptions = {
                    enableSorting: true,
                    columnDefs: [
                        { name: 'Name Name', field: 'gsx$name.$t' },
                        { name: 'Star Star', field: 'gsx$star.$t' }
                    ]
                };
                this.$http.get("https://spreadsheets.google.com/feeds/list/1YLUVMbVsqhLtEZkMWSpUtpvrSEn1VFfk7OevnuYcrbY/od6/public/values?alt=json")
                    .then(function (response) {
                    instance.tools = response.data.feed.entry;
                    console.log(instance.tools);
                    instance.gridOptions.data = instance.tools;
                });
            };
            return EngineerController;
        }());
        EngineerController.$inject = ["$http"];
        Home.EngineerController = EngineerController;
        Karuneegar.app.controller("EngineerController", EngineerController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
