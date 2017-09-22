module Karuneegar.Home {
    class MatrimonySearchComponent implements ng.IComponentOptions {
        bindings: any = {
            isbride: "<"            
        };

        templateUrl = "app/matrimony/matrimonySearch/matrimonySearch.html";
        controller = "MatrimonySearchController";
    }

    app.component("matrimonySearch", new MatrimonySearchComponent());
}