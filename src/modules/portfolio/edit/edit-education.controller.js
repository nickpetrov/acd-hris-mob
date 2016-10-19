(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEducationCtrl", EditEducationCtrl);

    function EditEducationCtrl(
        $scope,
        $controller    // is for inherit from prototype (Edit.proto.controller)
        ) {
        var vm = this;

        vm.currentItem = {
            TrainingOrganisation: "",
            CourseName: "",
            StartMonth: null,
            StartYear: null,
            EndMonth: null,
            EndYear: null
        };
        vm.portfolioPart = "Education";

        angular.extend(
            vm, 
            $controller('EditPortfolioCtrl', {
                $scope: vm
            })
        );  // extend

    }

})();
