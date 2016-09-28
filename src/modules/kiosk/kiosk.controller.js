(function() {

    angular
        .module("acdn-hris.app")
        .controller("KioskCtrl", KioskCtrl);

    function KioskCtrl(
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.userInfo;
        vm.test = "Kiosk page";
    }

})();
