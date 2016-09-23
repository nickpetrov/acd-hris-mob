(function() {

    angular
        .module("acdnHris.app")
        .controller("DashboardCtrl", DashboardCtrl);

    function DashboardCtrl() {
        var vm = this;

        vm.test = "Dashboard Page"
    }

})();
