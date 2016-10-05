(function() {

    angular
        .module("acdn-hris.app")
        .controller("DashboardCtrl", DashboardCtrl);

    function DashboardCtrl(
        UserService,
        CordovaService
    ) {
        var vm = this;

        vm.openInBrowse = openInBrowse;
        vm.userInfo = UserService.userInfo;

        function openInBrowse(label) {
            CordovaService.openInAppBrowser(label);
        }
    }

})();
