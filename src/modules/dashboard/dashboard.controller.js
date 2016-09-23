(function() {

    angular
        .module("acdn-hris.app")
        .controller("DashboardCtrl", DashboardCtrl);

    function DashboardCtrl() {
        var vm = this;

        vm.test = "Dashboard Page"
    }

})();
