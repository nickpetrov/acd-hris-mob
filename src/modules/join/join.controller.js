(function() {

    angular
        .module("acdnHris.join")
        .controller("JoinCtrl", JoinCtrl);

    function JoinCtrl($ionicHistory) {
        /* jshint validthis: true */
        var vm = this;

        vm.backButton = backButton;

        function backButton() {
            $ionicHistory.goBack(-1);
        }
    }

})();