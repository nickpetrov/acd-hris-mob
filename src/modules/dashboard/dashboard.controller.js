(function() {

    angular
        .module("acdnHris.dashboard")
        .controller("DashboardCtrl", DashboardCtrl);

    function DashboardCtrl() {
        var vm = this;

        vm.test = "Dashboard Page"
    }

})();
