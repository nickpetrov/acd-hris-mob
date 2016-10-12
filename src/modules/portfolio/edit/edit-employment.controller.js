(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEmploymentCtrl", EditEmploymentCtrl);

    function EditEmploymentCtrl(
        $state,
        $ionicLoading,
        $stateParams,
        PortfolioService
    ) {
        /* jshint validthis: true */
        var vm = this;
        var itemId = $stateParams.id;

        vm.onSave = onSave; //Save button
        vm.onCancel = onCancel; //Cancel button
        vm.showAlert = false; // Parameter of showing alert form validation
        vm.selectData = PortfolioService.getSelectData(); // Getting data for selects in view
        vm.currentItem = { //Form model
            employer: "",
            job: "",
            description: "",
            monthFrom: null,
            yearFrom: null,
            monthTo: null,
            yearTo: null
        };

        if(itemId != null) { // Fill form model for item editing if 'id' not null;
            var item = PortfolioService.getPortfolioInfoById("employment", itemId);

            vm.currentItem.employer = item.Employer;
            vm.currentItem.job = item.JobTitle;
            vm.currentItem.description = item.Description;
            vm.currentItem.monthFrom = item.StartMonth;
            vm.currentItem.yearFrom = item.StartYear;
            vm.currentItem.monthTo = item.EndMonth;
            vm.currentItem.yearTo = item.EndYear;
        }
        
        function onSave() {
            if(vm.employmentForm.$valid) {
                vm.showAlert = false;

                var sendData = {
                    Employment: {
                        Employer: vm.currentItem.employer,
                        JobTitle: vm.currentItem.job,
                        Description: vm.currentItem.description,
                        StartMonth: vm.currentItem.monthFrom,
                        StartYear: vm.currentItem.yearFrom,
                        EndMonth: vm.currentItem.monthTo,
                        EndYear: vm.currentItem.yearTo
                    }
                };

                if(itemId != null) {
                    sendData.Employment.Id = itemId;
                }

                $ionicLoading.show({
                    template: (itemId != null ? 'Editing' : 'Adding') + ' a job'
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
