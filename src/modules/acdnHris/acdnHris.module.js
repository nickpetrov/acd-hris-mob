(function() {

    angular
        .module("acdnHris", [
            "ionic",
            "ngCordova",
            "acdnHris.auth",
            "acdnHris.join",
            "acdnHris.privacy",
            "acdnHris.terms",
            "acdnHris.reset-password",
            "acdnHris.app"
        ]);
})();
