module Karuneegar.DataService {
    import HttpService = ng.IHttpService;
    import Promise = angular.IPromise;

    export interface IKaruneegarDataService {
        getStars(): string[];
        getBrideDetails(): Promise<any>;
        getGroomDetails(): Promise<any>;
    }

    class KaruneegarDataService implements IKaruneegarDataService {
        static $inject = ["$http"];

        constructor(
            private $http: HttpService) {
        }

        brideUrl = "https://spreadsheets.google.com/feeds/list/1pfvcBdbV_weJF1F5K2-EOGft9XgFPbZoJjMp6X-tS6g/od6/public/values?alt=json";
        groomUrl = "https://spreadsheets.google.com/feeds/list/1Vgy04J_FxBQTcdSxX56FzQLKa3vh8ynu4xYER3ax4u8/od6/public/values?alt=json";

        getStars(): string[] {
            let stars = ["Anusham", , "Astham", "Aswini", "Avittam", "Ayilyam", "Barani", "Chithirai", "Karthikai", "Kettai", "Magam", "Mirugasiridam",
                "Mulam", "Pooram", "Poosam", "Punarpoosam", "Puradam", "Purattadhi", "Revathi", "Rohini", "Sadayam", "Swathi", "Thiruvadhirai",
                "Tiruvonam", "Uthiradam", "Uthiram", "Uttrattadhi", "Visakam"];
            return stars;
        }

        getBrideDetails(): Promise<any> {
            let instance = this;
            return this.$http.get(instance.brideUrl)
                .then(response => response.data);
        }

        getGroomDetails(): Promise<any> {
            let instance = this;
            return this.$http.get(instance.groomUrl)
                .then(response => response.data);
        }

    }

    app.service("KaruneegarDataService", KaruneegarDataService);
}