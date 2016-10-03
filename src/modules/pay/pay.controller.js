(function() {

    angular
        .module("acdn-hris.app")
        .controller("PayCtrl", PayCtrl);

    function PayCtrl(
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.getUserInfo();
        vm.test = "Pay page";
    }

})();