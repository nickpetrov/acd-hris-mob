(function() {

    angular
        .module("acdnHris.terms")
        .controller("TermsCtrl", TermsCtrl);

    function TermsCtrl($ionicHistory) {
        this.test = "Terms page";

        this.backButton = function() {
            $ionicHistory.goBack(-1);
        };
    }

})();
