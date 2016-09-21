(function() {

    angular
        .module("acdnHris.terms")
        .controller("TermsCtrl", TermsCtrl);

    // function TermsCtrl($ionicHistory, CordovaService $ionicPlatform, $cordovaEmailComposer, $error) {
    function TermsCtrl($ionicHistory, CordovaService) {
        this.test = "Terms page";

        this.backButton = function() {
            $ionicHistory.goBack(-1);
        };

        this.sendMail = function() {
            CordovaService.sendEmail();
        };
    }

})();
