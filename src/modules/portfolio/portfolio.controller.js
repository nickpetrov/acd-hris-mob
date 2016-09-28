(function() {

    angular
        .module("acdn-hris.app")
        .controller("PortfolioCtrl", PortfolioCtrl);

    function PortfolioCtrl(
        UserService
    ) {
        var vm = this;

        vm.userInfo = UserService.userInfo;
    }

})();
