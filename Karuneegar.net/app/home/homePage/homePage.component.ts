module Karuneegar.Home {
    class HomePageComponent implements ng.IComponentOptions {
        bindings: any = {
        };

        templateUrl = "app/home/homePage/homePage.html";
        controller = "HomePageController";
    }

    app.component("homePage", new HomePageComponent());
}