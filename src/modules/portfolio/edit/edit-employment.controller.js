(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEmploymentCtrl", EditEmploymentCtrl);

    /**
    * @description The controller inherits from EditPortfolioCtrl
    * @see EditPortfolioCtrl
    */
    function EditEmploymentCtrl(
        $state,
        $stateParams,
        $controller
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.validateForm = validateForm;
        vm.currentItem = {
            Employer: "",
            JobTitle: "",
            Description: "",
            StartMonth: null,
            StartYear: null,
            EndMonth: null,
            EndYear: null
        };
        vm.portfolioPart = "Employment";
        vm.itemId = $stateParams.id;

        function validateForm() {
            return (
                vm.form.employerField.$valid &&
                vm.form.jobTitleField.$valid &&
                vm.form.descriptionField.$valid &&
                vm.form.startMonthField.$valid &&
                vm.form.startYearField.$valid &&
                vm.form.endMonthField.$valid &&
                vm.form.endYearField.$valid
            );
        };

        $controller('EditPortfolioCtrl', {
            $scope: vm
        });

    };

})();
