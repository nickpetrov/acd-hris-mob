(function() {

    angular
        .module("acdn-hris.reset-password")
        .controller("ResetPasswordCtrl", ResetPasswordCtrl);

    function ResetPasswordCtrl($ionicHistory) {
        /* jshint validthis: true */
        var vm = this;

        vm.backButton = backButton;
        vm.resetPassword = backButton; //Must be changed
        vm.formData = {
          email: ""
        };

        function backButton() {
            $ionicHistory.goBack(-1);
        }
    }

})();