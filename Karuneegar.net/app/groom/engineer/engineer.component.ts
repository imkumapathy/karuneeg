module Karuneegar.Home {
    class GroomEngineerComponent implements ng.IComponentOptions {
        bindings: any = {          
        };

        templateUrl = "app/groom/engineer/engineer.html";
        controller = "EngineerController";
    }

    app.component("groomEngineer", new GroomEngineerComponent());
}