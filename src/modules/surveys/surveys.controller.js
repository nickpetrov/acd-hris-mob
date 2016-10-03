(function() {

    angular
        .module("acdn-hris.app")
        .controller("SurveysCtrl", SurveysCtrl);

    function SurveysCtrl(
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.userInfo;
        vm.test = "Surveys page";
    }

})();