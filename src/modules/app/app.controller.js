(function() {

    angular
        .module("acdn-hris.app")
        .controller("AppCtrl", AppCtrl);

    function AppCtrl() {
        var vm = this;

        vm.menuTitle = "Features";
    }

})();