(function() {

    angular
        .module("acdn-hris.app")
        .controller("UpskillingCtrl", UpskillingCtrl);

    function UpskillingCtrl(
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.userInfo;
        vm.test = "Upskilling page";
    }

})();
