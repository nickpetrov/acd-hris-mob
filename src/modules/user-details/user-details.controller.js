(function() {

    angular
        .module("acdn-hris.app")
        .controller("UserDetailsCtrl", UserDetailsCtrl);

    function UserDetailsCtrl(
        $ionicHistory,
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.userInfo;
        vm.saveUserDetails = saveUserDetails;
        vm.formData = {
            preferred: "Spirit",
            firstName: vm.userInfo.userName ? vm.userInfo.userName : 'John',
            lastName: "Bloggs",
            birth: "12/09/1985",
            email:  "sandbox@agedcaredn.com.au",
            mobile: "0412345678"
        };

        function saveUserDetails() {
            $ionicHistory.goBack();
        }

    }

})();
