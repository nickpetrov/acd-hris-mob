(function() {

    angular
        .module("acdnHris.privacy")
        .controller("PrivacyCtrl", PrivacyCtrl);

    function PrivacyCtrl($ionicHistory) {
        /* jshint validthis: true */
        var vm = this;

        vm.test = "Privacy page";
        vm.backButton = backButton;

        function backButton() {
            $ionicHistory.goBack(-1);
        }
    }

})();