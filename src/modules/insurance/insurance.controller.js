(function() {

    angular
        .module("acdn-hris.app")
        .controller("InsuranceCtrl", InsuranceCtrl);

    function InsuranceCtrl(
        $stateParams,
        UserService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.getUserInfo();
        vm.test = "Insurance page";
        vm.templateData = $stateParams;
        vm.getTemplateLink = getTemplateLink;

        function getTemplateLink() {
            return "templates/insurance/" + vm.templateData.link + "-insurance.template.html";
        }
    }

})();