module Karuneegar.Home {
    class HomeComponent implements ng.IComponentOptions {
        bindings: any = {

        };

        templateUrl = "app/home/home.html";
        controller = "HomeController";
    }

    app.component("home", new HomeComponent());
}