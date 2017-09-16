module Karuneegar.Home {
    class BrideComponent implements ng.IComponentOptions {
        bindings: any = {
            data: "<",
            stars: "<"
        };

        templateUrl = "app/bride/bride.html";
        controller = "BrideController";
    }

    app.component("bride", new BrideComponent());
}