var Karuneegar;
(function (Karuneegar) {
    var DataService;
    (function (DataService) {
        var KaruneegarDataService = (function () {
            function KaruneegarDataService($http) {
                this.$http = $http;
                this.brideUrl = "https://spreadsheets.google.com/feeds/list/1pfvcBdbV_weJF1F5K2-EOGft9XgFPbZoJjMp6X-tS6g/od6/public/values?alt=json";
                this.groomUrl = "https://spreadsheets.google.com/feeds/list/1Vgy04J_FxBQTcdSxX56FzQLKa3vh8ynu4xYER3ax4u8/od6/public/values?alt=json";
            }
            KaruneegarDataService.prototype.getStars = function () {
                var stars = ["Anusham", , "Astham", "Aswini", "Avittam", "Ayilyam", "Barani", "Chithirai", "Karthikai", "Kettai", "Magam", "Mirugasiridam",
                    "Mulam", "Pooram", "Poosam", "Punarpoosam", "Puradam", "Purattadhi", "Revathi", "Rohini", "Sadayam", "Swathi", "Thiruvadhirai",
                    "Tiruvonam", "Uthiradam", "Uthiram", "Uttrattadhi", "Visakam"];
                return stars;
            };
            KaruneegarDataService.prototype.getGroomDetails = function () {
                var instance = this;
                return this.$http.get(instance.groomUrl)
                    .then(function (response) { return response.data; });
            };
            KaruneegarDataService.prototype.getBrideDetails = function () {
                var instance = this;
                return this.$http.get(instance.brideUrl)
                    .then(function (response) { return response.data; });
            };
            return KaruneegarDataService;
        }());
        KaruneegarDataService.$inject = ["$http"];
        Karuneegar.app.service("KaruneegarDataService", KaruneegarDataService);
    })(DataService = Karuneegar.DataService || (Karuneegar.DataService = {}));
})(Karuneegar || (Karuneegar = {}));
//# sourceMappingURL=dataservices.js.map