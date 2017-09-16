module Karuneegar.Home {
    class GroomComponent implements ng.IComponentOptions {
        bindings: any = {
            data: "<",
            stars: "<"
        };

        templateUrl = "app/groom/groom.html";
        controller = "GroomController";
    }

    app.component("groom", new GroomComponent());
}