module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    import DataService = Karuneegar.DataService.IKaruneegarDataService;

    export class MatrimonySearchController implements ng.IComponentController {
        static $inject = ["KaruneegarDataService", "$state"];
        tools: any[];
        brideGridOptions: any;
        data: any;
        stars: string[];
        brideStars: any = [];
        fromDate: any;
        endDate: any;
        isbride: boolean;

        constructor(private karuneegarDataService: DataService, private $state: angular.ui.IStateService) {

        }

        initalSetup() {
            let instance = this;
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

        }

        updateData() {

            let instance = this;
            let updatedData = this.data;
            //star filter
            if (instance.brideStars.length > 0) {
                updatedData = this.data.filter(function (details) {
                    if (instance.brideStars.indexOf(details.gsx$star.$t) > -1) {
                        return details;
                    };
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

        }

        $onInit() {

            this.brideGridOptions = {
                enableSorting: true,
                columnDefs: [
                    { name: 'Name', field: 'gsx$name.$t' },
                    { name: 'Star', field: 'gsx$star.$t' },
                    { name: 'Education', field: 'gsx$education.$t' },
                    { name: 'Date Of Birth', field: 'gsx$dob.$t' },
                    { name: 'Description', field: 'gsx$description.$t' },
                    { name: 'Reference Number', field:'gsx$diarynumber.$t'}
                ]
            };
            this.initalSetup();
        }
    }

    app.controller("MatrimonySearchController", MatrimonySearchController);
}