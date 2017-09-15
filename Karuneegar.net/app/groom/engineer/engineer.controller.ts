module Karuneegar.Home {
    import HttpService = angular.IHttpService;
    export class EngineerController implements ng.IComponentController {
        static $inject = ["$http"];
        tools: any[];
        gridOptions: any;

        constructor(private $http: HttpService) {
        }

        $onInit() {
            let instance = this;

            this.gridOptions = {
                enableSorting: true,
                columnDefs: [
                    { name: 'Name Name', field: 'gsx$name.$t' },
                    { name: 'Star Star', field: 'gsx$star.$t' }
                ]
            };


            this.$http.get("https://spreadsheets.google.com/feeds/list/1YLUVMbVsqhLtEZkMWSpUtpvrSEn1VFfk7OevnuYcrbY/od6/public/values?alt=json")
                .then(function (response: any) {
                    instance.tools = response.data.feed.entry;
                    console.log(instance.tools);

                    instance.gridOptions.data = instance.tools; 
                });
        }
    }

    app.controller("EngineerController", EngineerController);
}