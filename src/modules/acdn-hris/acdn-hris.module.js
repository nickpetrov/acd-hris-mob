(function() {

    angular
        .module("acdn-hris", [
            "ionic",
            "ngCordova",
            "ngStorage",
            "restangular",
            "acdn-hris.auth",
            "acdn-hris.join",
            "acdn-hris.privacy",
            "acdn-hris.terms",
            "acdn-hris.reset-password",
            "acdn-hris.app"
        ]);
})();
