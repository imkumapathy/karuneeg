var Karuneegar;
(function (Karuneegar) {
    var Home;
    (function (Home) {
        var MatrimonySearchController = (function () {
            function MatrimonySearchController(karuneegarDataService, $state) {
                this.karuneegarDataService = karuneegarDataService;
                this.$state = $state;
                this.brideStars = [];
            }
            MatrimonySearchController.prototype.initalSetup = function () {
                var instance = this;
                if (this.isbride) {
                    this.karuneegarDataService.getBrideDetails().then(function (response) {
                        instance.brideGridOptions.data = response.feed.entry;
                        instance.data = response.feed.entry;
                        console.log("bride data...");
                        console.log(response.feed.entry);
                    });
                }
                else {
                    this.karuneegarDataService.getGroomDetails().then(function (response) {
                        instance.brideGridOptions.data = response.feed.entry;
                        instance.data = response.feed.entry;
                        console.log("groom data...");
                        console.log(response.feed.entry);
                    });
                }
                this.stars = this.karuneegarDataService.getStars();
            };
            MatrimonySearchController.prototype.updateData = function () {
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
            MatrimonySearchController.prototype.$onInit = function () {
                this.brideGridOptions = {
                    enableSorting: true,
                    columnDefs: [
                        { name: 'Name', field: 'gsx$name.$t' },
                        { name: 'Star', field: 'gsx$star.$t' },
                        { name: 'Education', field: 'gsx$education.$t' },
                        { name: 'Date Of Birth', field: 'gsx$dob.$t' },
                        { name: 'Description', field: 'gsx$description.$t' },
                        { name: 'Reference Number', field: 'gsx$diarynumber.$t' }
                    ]
                };
                this.initalSetup();
            };
            return MatrimonySearchController;
        }());
        MatrimonySearchController.$inject = ["KaruneegarDataService", "$state"];
        Home.MatrimonySearchController = MatrimonySearchController;
        Karuneegar.app.controller("MatrimonySearchController", MatrimonySearchController);
    })(Home = Karuneegar.Home || (Karuneegar.Home = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=matrimonySearch.controller.js.map