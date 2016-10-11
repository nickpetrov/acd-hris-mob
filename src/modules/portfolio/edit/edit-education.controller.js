(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEducationCtrl", EditEducationCtrl);

    function EditEducationCtrl(
        $state,
        $ionicLoading,
        $stateParams,
        GabeService,
        PortfolioService
    ) {
        /* jshint validthis: true */
        var vm = this;
        var itemId = $stateParams.id;

        vm.onSave = onSave; //Save button
        vm.onCancel = onCancel; //Cancel button
        vm.showAlert = false; // Parameter of showing alert form validation
        vm.selectData = { // 'from/to' month and 'from' years data for selects
            month: GabeService.getMonths(),
            yearsFrom: GabeService.createYearsArray()
        };
        vm.currentItem = { //Form model
            org: "",
            course: "",
            monthFrom: null,
            yearFrom: null,
            monthTo: null,
            yearTo: null
        };

        if(itemId != null) { // Fill form model for item editing if 'id' not null;
            var item = PortfolioService.getPortfolioInfoById("education", itemId);

            vm.currentItem.org = item.TrainingOrganisation;
            vm.currentItem.course = item.CourseName;
            vm.currentItem.monthFrom = item.StartMonth;
            vm.currentItem.yearFrom = item.StartYear;
            vm.currentItem.monthTo = item.EndMonth;
            vm.currentItem.yearTo = item.EndYear;
        }

        Object.defineProperty(vm.selectData, "yearsTo", { // adding at selectData object 'to' years data
            configurable: true,
            enumerable: true,
            get: function() {
                var c = this.yearsFrom.slice();
                c.unshift("Present");
                return c;
            }
        });

        function onSave() { // Save button
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

                if(itemId != null) {
                    sendData.Education.Id = itemId;
                }

                $ionicLoading.show({
                    template: (itemId != null ? 'Editing' : 'Adding') + ' a course'
                });

                PortfolioService.sendPortfolioInfo(sendData)
                    .then(function() {
                        $ionicLoading.hide();
                        $state.go("app.portfolio");
                    })
                    .catch(function(err) {
                        $error(err);
                        $ionicLoading.hide();
                        $state.go("app.portfolio");
                    });

                sendData = null;

                return;
            }

            vm.showAlert = true;
        }

        function onCancel() {
            $state.go("app.portfolio");
        }
    }

})();
