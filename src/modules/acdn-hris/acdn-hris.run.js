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
        $timeout
    ) {

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
                navigator.splashscreen.hide();
            }
        });

        // $rootScope.$on('$stateChangeSuccess', function() {
        //     $ionicLoading.hide();
        // });

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
