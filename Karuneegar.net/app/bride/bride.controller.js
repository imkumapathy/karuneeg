var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var BrideController = (function () {
            function BrideController($http) {
                this.$http = $http;
                this.brideStars = [];
            }
            BrideController.prototype.initalSetup = function () {
            };
            BrideController.prototype.updateData = function () {
                var instance = this;
                var updatedData = this.data;
                //star filter
                if (instance.brideStars.length > 0) {
                    updatedData = this.data.filter(function (details) {
                        if (instance.brideStars.indexOf(details.gsx$star.$t) > -1) {
                            return details;
                        }
                        ;
                    });
                }
                //date filter
                if (this.fromDate) {
                    updatedData = updatedData.filter(function (details) {
                        var date = new Date(details.gsx$dob.$t);
                        if (date > instance.fromDate) {
                            return details;
                        }
                    });
                }
                if (this.endDate) {
                    updatedData = updatedData.filter(function (details) {
                        var date = new Date(details.gsx$dob.$t);
                        if (date < instance.endDate) {
                            return details;
                        }
                    });
                }
                instance.brideGridOptions.data = updatedData;
            };
            BrideController.prototype.$onInit = function () {
                this.brideGridOptions = {
                    enableSorting: true,
                    columnDefs: [
                        { name: 'Name', field: 'gsx$name.$t' },
                        { name: 'Star', field: 'gsx$star.$t' },
                        { name: 'Education', field: 'gsx$education.$t' },
                        { name: 'Date Of Birth', field: 'gsx$dob.$t' },
                        { name: 'Description', field: 'gsx$description.$t' },
                    ],
                    data: this.data
                };
            };
            return BrideController;
        }());
        BrideController.$inject = ["$http"];
        Home.BrideController = BrideController;
        Karuneegar.app.controller("BrideController", BrideController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
