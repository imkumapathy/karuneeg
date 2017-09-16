module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    export class GroomController implements ng.IComponentController {
        static $inject = ["$http"];
        tools: any[];
        gridOptions: any;
        data: any;
        constructor(private $http: HttpService) {
        }

        $onInit() {
            let instance = this;

            this.gridOptions = {
                enableSorting: true,
                columnDefs: [
                    { name: 'Name', field: 'gsx$name.$t' },
                    { name: 'Star', field: 'gsx$star.$t' },
                    { name: 'Education', field: 'gsx$education.$t' },
                    { name: 'Date Of Birth', field: 'gsx$dob.$t', type: 'date', cellFilter: 'date:\'yyyy-MM-dd\'' },
                    { name: 'Description', field: 'gsx$description.$t' },
                ],
                data: instance.data
            };


            //this.$http.get("https://spreadsheets.google.com/feeds/list/1Vgy04J_FxBQTcdSxX56FzQLKa3vh8ynu4xYER3ax4u8/od6/public/values?alt=json")
            //    .then(function (response: any) {
            //        instance.tools = response.data.feed.entry;
            //        console.log(instance.tools);

            //        instance.gridOptions.data = instance.tools;
            //    });
        }
    }

    app.controller("GroomController", GroomController);
}