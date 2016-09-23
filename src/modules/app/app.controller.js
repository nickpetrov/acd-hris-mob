(function() {

    angular
        .module("acdnHris.app")
        .controller("AppCtrl", AppCtrl);

    function AppCtrl() {
        var vm = this;

        vm.menuTitle = "Features";
    }

})();