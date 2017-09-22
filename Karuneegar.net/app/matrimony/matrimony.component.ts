module Karuneegar.Home {
    class MatrimonyComponent implements ng.IComponentOptions {
        bindings: any = {
            data: "<",
            stars: "<"
        };

        templateUrl = "app/matrimony/matrimony.html";
        controller = "MatrimonyController";
    }

    app.component("matrimony", new MatrimonyComponent());
}