(function() {

    angular
        .module("acdn-hris")
        .config(acdnHrisConfig)
        .config(acdnHrisStateConfig);

    function acdnHrisConfig($ionicConfigProvider) {

        //Disable backButton text and enable only "left-arrow" icon
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');

        //Align of titles
        $ionicConfigProvider.navBar.alignTitle('center');

    }

    function acdnHrisStateConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("auth", {
                url: "/auth",
                cache: false,
                templateUrl: "templates/auth/auth.template.html",
                controller: "AuthCtrl",
                controllerAs: "auth"
            })
            .state("join", {
                url: "/join",
                cache: false,
                templateUrl: "templates/join/join.template.html",
                controller: "JoinCtrl",
                controllerAs: "join"
            })
            .state("privacy", {
                url: "/privacy",
                cache: false,
                templateUrl: "templates/privacy/privacy.template.html",
                controller: "PrivacyCtrl",
                controllerAs: "privacy"
            })
            .state("terms", {
                url: "/terms",
                cache: false,
                templateUrl: "templates/terms/terms.template.html",
                controller: "TermsCtrl",
                controllerAs: "terms"
            })
            .state("reset", {
                url: "/reset-password",
                cache: false,
                templateUrl: "templates/reset-password/reset-password.template.html",
                controller: "ResetPasswordCtrl",
                controllerAs: "reset"
            })
            .state("app", {
                url: "/app",
                cache: false,
                abstract: true,
                templateUrl: "templates/app/app.template.html",
                controller: "AppCtrl",
                controllerAs: "app"
            })
            .state("app.dashboard", {
                url: "^/dashboard",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/dashboard/dashboard.template.html",
                        controller: "DashboardCtrl",
                        controllerAs: "dashboard"
                    }
                }
            })
            .state("app.portfolio", {
                url: "^/portfolio",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/portfolio/portfolio.template.html",
                        controller: "PortfolioCtrl",
                        controllerAs: "portfolio"
                    }
                }
            })
            .state("app.userDetails", {
                url: "^/user-details",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/user-details/user-details.template.html",
                        controller: "UserDetailsCtrl",
                        controllerAs: "user"
                    }
                }
            })
            .state("app.changePhoto", {
                url: "^/change-photo",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/change-photo/change-photo.template.html",
                        controller: "ChangePhotoCtrl",
                        controllerAs: "photo"
                    }
                }
            })
            .state("app.kiosk", {
                url: "^/kiosk",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/kiosk/kiosk.template.html",
                        controller: "KioskCtrl",
                        controllerAs: "kiosk"
                    }
                }
            })
            .state("app.rewards", {
                url: "^/rewards",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/rewards/rewards.template.html",
                        controller: "RewardsCtrl",
                        controllerAs: "rewards"
                    }
                }
            })
            .state("app.upskilling", {
                url: "^/upskilling",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/upskilling/upskilling.template.html",
                        controller: "UpskillingCtrl",
                        controllerAs: "upskilling"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/auth');
    }

})();
