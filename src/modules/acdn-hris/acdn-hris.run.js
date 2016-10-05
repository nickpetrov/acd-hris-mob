(function () {

    angular
        .module("acdn-hris")
        .run(acdnHrisRun);

    function acdnHrisRun(
        $rootScope,
        $ionicPlatform,
        $ionicPopup,
        $error,
        $state,
        TokenService
    ) {
        //Set default cordova's plugins settings
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            if (window.navigator) {
                // navigator.splashscreen.hide();
            }
        });

        //Checking token
        if(!TokenService.isToken()) {
            TokenService.setToken("0fccc685-4e54-47a5-a0d9-7b1c005a9534");
        };


        //Handling state change errors
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $error(error);
            $ionicPopup.alert({
                title: 'Error getting to ' + toState.name + ' state.'
            })
                .then(function () {
                    $state.go(fromState.name);
                });
        });

    }

})();
