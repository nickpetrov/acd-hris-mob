(function() {

    angular
        .module("acdn-hris.app")
        .controller("DashboardCtrl", DashboardCtrl);

    function DashboardCtrl(
        UserService
    ) {
        var vm = this;

        vm.userInfo = UserService.userInfo;
    }

})();
