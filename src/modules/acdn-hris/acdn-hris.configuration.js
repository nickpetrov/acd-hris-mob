(function() {

    angular
        .module("acdn-hris")
        .config(acdnHrisConfig)
        .config(acdnHrisStateConfig);

    function acdnHrisConfig(
        $ionicConfigProvider,
        RestangularProvider,
        apiRoot
    ) {

        //Disable backButton text and enable only "left-arrow" icon
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');

        //Ionic align of titles
        $ionicConfigProvider.navBar.alignTitle('center');

        //Setting restangular provider
        RestangularProvider.setBaseUrl(apiRoot);
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
            .state("app.edit-education", {
                url: "^/edit-education",
                cache: false,
                params: {
                  id: null
                },
                views: {
                    "app-content": {
                        templateUrl: "templates/portfolio/edit/edit-education.template.html",
                        controller: "EditEducationCtrl",
                        controllerAs: "educ"
                    }
                }
            })
            .state("app.edit-employment", {
                url: "^/edit-employment",
                cache: false,
                params: {
                    id: null
                },
                views: {
                    "app-content": {
                        templateUrl: "templates/portfolio/edit/edit-employment.template.html",
                        controller: "EditEmploymentCtrl",
                        controllerAs: "empl"
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
            .state("app.surveys", {
                url: "^/surveys",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/surveys/surveys.template.html",
                        controller: "SurveysCtrl",
                        controllerAs: "survey"
                    }
                }
            })
            .state("app.pay", {
                url: "^/pay",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/pay/pay.template.html",
                        controller: "PayCtrl",
                        controllerAs: "pay"
                    }
                }
            })
            .state("app.requests", {
                url: "^/requests",
                cache: false,
                views: {
                    "app-content": {
                        templateUrl: "templates/requests/requests.template.html",
                        controller: "RequestsCtrl",
                        controllerAs: "request"
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
            .state("app.insurance", {
                url: "^/insurance",
                cache: false,
                params: {
                    title: null,
                    link: null
                },
                views: {
                    "app-content": {
                        templateUrl: "templates/insurance/insurance.template.html",
                        controller: "InsuranceCtrl",
                        controllerAs: "insurance"
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
                        controllerAs: "skill"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/auth');
    }

})();
