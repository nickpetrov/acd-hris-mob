(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEducationCtrl", EditEducationCtrl);

    /**
    * @description The controller inherits from EditPortfolioCtrl
    * @see EditPortfolioCtrl
    */
    function EditEducationCtrl(
        $state,
        $stateParams,
        $controller
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.validateForm = validateForm;
        vm.currentItem = {
            TrainingOrganisation: "",
            CourseName: "",
            StartMonth: null,
            StartYear: null,
            EndMonth: null,
            EndYear: null
        };
        vm.portfolioPart = "Education";
        vm.itemId = $stateParams.id;

        function validateForm() {
            return (
                vm.form.trainingOrganisationField.$valid &&
                vm.form.courseNameField.$valid &&
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
