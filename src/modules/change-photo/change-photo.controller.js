(function() {

    angular
        .module("acdn-hris.app")
        .controller("ChangePhotoCtrl", ChangePhotoCtrl);

    function ChangePhotoCtrl(
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.userInfo;
        vm.test = "Change photo page";
    }

})();
