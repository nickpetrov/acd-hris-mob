(function() {

    angular
        .module("acdn-hris.app")
        .controller("RewardsCtrl", RewardsCtrl);

    function RewardsCtrl(
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.userInfo;
        vm.test = "Rewards page";
    }

})();
