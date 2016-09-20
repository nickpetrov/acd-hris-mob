(function() {

    angular
        .module("acdnHris.privacy")
        .controller("PrivacyCtrl", PrivacyCtrl);

    function PrivacyCtrl($scope, $ionicHistory) {
        $scope.test = "Privacy page";

        $scope.backButton = function() {
            $ionicHistory.goBack(-1);
        };
    }

})();