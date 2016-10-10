(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEducationCtrl", EditEducationCtrl);

    function EditEducationCtrl(
        $state,
        $ionicLoading,
        GabeService,
        PortfolioService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.onSave = onSave;
        vm.onCancel = onCancel;
        vm.showAlert = false;
        vm.selectData = {
            month: GabeService.getMonths(),
            yearsFrom: GabeService.createYearsArray()
        };
        vm.currentItem = {
            org: "",
            course: "",
            monthFrom: null,
            yearFrom: null,
            monthTo: null,
            yearTo: null
        };

        Object.defineProperty(vm.selectData, "yearsTo", {
            configurable: true,
            enumerable: true,
            get: function() {
                var c = this.yearsFrom.slice();
                c.unshift("Present");
                return c;
            }
        });

        function onSave() {
            if(vm.educationForm.$valid) {
                vm.showAlert = false;
                var sendData = {
                    Education: {
                        CourseName: vm.currentItem.course,
                        TrainingOrganisation: vm.currentItem.org,
                        StartMonth: vm.currentItem.monthFrom,
                        StartYear: vm.currentItem.yearFrom,
                        EndMonth: vm.currentItem.monthTo,
                        EndYear: vm.currentItem.yearTo
                    }
                };

                $ionicLoading.show({
                    template: 'Adding a course'
                });

                PortfolioService.sendPortfolioInfo(sendData)
                    .then(function() {
                        $ionicLoading.hide();
                        $state.go("app.portfolio", {educ: true});
                    })
                    .catch(function(err) {
                        $error(err);
                        $ionicLoading.hide();
                        $state.go("app.portfolio", {educ: false});
                    });

                sendData = null;

                return;
            }

            vm.showAlert = true;
        }

        function onCancel() {
            $state.go("app.portfolio", {educ: null});
        }
    }

})();
