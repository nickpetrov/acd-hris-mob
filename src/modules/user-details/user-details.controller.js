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
        var userInfo = UserService.getUserInfo();

        vm.saveUserDetails = saveUserDetails;
        vm.formData = {
            preferred: userInfo.preferred,
            firstName: userInfo.firstName ? userInfo.firstName : 'John',
            lastName: userInfo.lastName,
            birth: userInfo.birth,
            email:  userInfo.email,
            mobile: userInfo.mobile
        };

        function saveUserDetails() {
            userInfo.preferred = vm.formData.preferred;
            userInfo.firstName = vm.formData.firstName;
            userInfo.lastName = vm.formData.lastName;
            userInfo.birth = vm.formData.birth;
            userInfo.email = vm.formData.email;
            userInfo.mobile = vm.formData.mobile;
            $ionicHistory.goBack();
        }

    }

})();
