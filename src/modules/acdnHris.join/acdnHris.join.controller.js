(function() {

    angular
        .module("acdnHris.join")
        .controller("JoinCtrl", JoinCtrl);

    function JoinCtrl($scope, $state) {
        $scope.test = "Join page";

        $scope.backButton = function() {
            $state.go("auth");
        }
    }

})();