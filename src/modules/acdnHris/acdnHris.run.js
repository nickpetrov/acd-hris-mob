(function() {

    angular
        .module("acdnHris")
        .run(acdnHrisRun);

    function acdnHrisRun($rootScope, $ionicPlatform) {

        $ionicPlatform.ready(function() {
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
        });

        // $rootScope.$on('$stateChangeSuccess', function() {
        //     $ionicLoading.hide();
        // });
        //
        // $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        //     console.error(error);//Rewrite
        //     $ionicLoading.hide();
        //     $ionicPopup.alert({
        //         title: 'Error getting to ' + toState.name + ' state.'
        //     })
        //         .then(function() {
        //             $state.go();
        //         });
        // });

    }

})();
