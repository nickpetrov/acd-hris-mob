(function() {

    angular
        .module("acdnHris.privacy")
        .controller("PrivacyCtrl", PrivacyCtrl);

    function PrivacyCtrl($ionicHistory, CordovaService) {
        /* jshint validthis: true */
        var vm = this;

        vm.backButton = backButton;
        vm.sendMail = sendMail;

        function backButton() {
            $ionicHistory.goBack(-1);
        }

        function sendMail() {
            CordovaService.sendEmail();
        }
    }

})();
