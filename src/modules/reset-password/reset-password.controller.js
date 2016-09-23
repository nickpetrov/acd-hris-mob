(function() {

    angular
        .module("acdnHris.reset-password")
        .controller("ResetPasswordCtrl", ResetPasswordCtrl);

    function ResetPasswordCtrl($ionicHistory) {
        /* jshint validthis: true */
        var vm = this;

        vm.backButton = backButton;
        vm.formData = {
          email: ""
        };

        function backButton() {
            $ionicHistory.goBack(-1);
        }
    }

})();