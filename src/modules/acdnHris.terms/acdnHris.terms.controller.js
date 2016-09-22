(function() {

    angular
        .module("acdnHris.terms")
        .controller("TermsCtrl", TermsCtrl);

    function TermsCtrl($ionicHistory, CordovaService) {
        /* jshint validthis: true */
        var vm = this;

        vm.test = "Terms page";
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
