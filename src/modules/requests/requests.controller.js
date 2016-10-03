(function() {

    angular
        .module("acdn-hris.app")
        .controller("RequestsCtrl", RequestsCtrl);

    function RequestsCtrl(
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.getUserInfo();
        vm.test = "Request page";
    }

})();