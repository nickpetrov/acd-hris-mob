(function() {

    angular
        .module("acdnHris")
        .config(acdnHrisConfig)
        .config(acdnHrisStateConfig);

    function acdnHrisConfig($ionicConfigProvider) {

        //Disable backButton text and enable only "left-arrow" icon
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');

        //Align of
        $ionicConfigProvider.navBar.alignTitle('center');

    }

    function acdnHrisStateConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("auth", {
                url: "/auth",
                templateUrl: "templates/acdnHris.auth/acdnHris.auth.template.html",
                controller: "AuthCtrl"
            })
            .state("join", {
                url: "/join",
                templateUrl: "templates/acdnHris.join/acdnHris.join.template.html",
                controller: "JoinCtrl"
            })
            .state("privacy", {
                url: "/privacy",
                templateUrl: "templates/acdnHris.privacy/acdnHris.privacy.template.html",
                controller: "PrivacyCtrl"
            });
            // .state("app", {
            //     url: "/app",
            //     abstract: true,
            //     templateUrl: "templates/acdnHris.app/acdnHris.app.template.html",
            //     controller: "AppCtrl"
            // })
            // .state("app.search", {
            //     url: "/search",
            //     views: {
            //         "appContent": {
            //             templateUrl: "templates/acdnHris.search/acdnHris.search.template.html",
            //             controller: "SearchCtrl"

            //         }
            //     }
            // })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/auth');
    }

})();
