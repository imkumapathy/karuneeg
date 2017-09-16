module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    export class BrideController implements ng.IComponentController {
        static $inject = ["$http"];
        tools: any[];
        brideGridOptions: any;
        data: any;
        stars: string[];
        brideStars: any = [];
        fromDate: any;
        endDate: any;
        constructor(private $http: HttpService) {

        }

        initalSetup() {
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
                ],
                data: this.data
            };
        }
    }

    app.controller("BrideController", BrideController);
}