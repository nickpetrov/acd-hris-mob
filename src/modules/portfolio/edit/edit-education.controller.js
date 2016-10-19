(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEducationCtrl", EditEducationCtrl);

    function EditEducationCtrl(
        $state,
        $controller    // is for inherit from prototype (Edit.proto.controller)
        ) {
        var vm = this;

        vm.portfolioPart = "Education";
        vm.currentItem = {
            TrainingOrganisation: "",
            CourseName: "",
            StartMonth: "",
            StartYear: "",
            EndMonth: "",
            EndYear: ""
        };

        angular.extend(
            vm, 
            $controller('EditPortfolioCtrl', {
                $scope: vm
            }));

    }
    // function EditEducationCtrl(
    //     $state,
    //     $ionicLoading,
    //     $stateParams,
    //     PortfolioService
    // ) {
    //     /* jshint validthis: true */
    //     var vm = this;
    //     var itemId = $stateParams.id;

    //     vm.onSave = onSave; //Save button
    //     vm.onCancel = onCancel; //Cancel button
    //     vm.showAlert = false; // Parameter of showing alert form validation
    //     vm.selectData = PortfolioService.getSelectData(); // Getting data for selects in view
    //     vm.currentItem = { //Form model
    //         org: "",
    //         course: "",
    //         monthFrom: null,
    //         yearFrom: null,
    //         monthTo: null,
    //         yearTo: null
    //     };

    //     if(itemId != null) { // Fill form model for item editing if 'id' not null;
    //         var item = PortfolioService.getPortfolioInfoById("education", itemId);

    //         vm.currentItem.org = item.TrainingOrganisation;
    //         vm.currentItem.course = item.CourseName;
    //         vm.currentItem.monthFrom = item.StartMonth;
    //         vm.currentItem.yearFrom = item.StartYear;
    //         vm.currentItem.monthTo = item.EndMonth;
    //         vm.currentItem.yearTo = item.EndYear;
    //     }

    //     function onSave() { // Save button
    //         if(vm.educationForm.$valid) {
    //             vm.showAlert = false;

    //             var sendData = {
    //                 Education: {
    //                     CourseName: vm.currentItem.course,
    //                     TrainingOrganisation: vm.currentItem.org,
    //                     StartMonth: vm.currentItem.monthFrom,
    //                     StartYear: vm.currentItem.yearFrom,
    //                     EndMonth: vm.currentItem.monthTo,
    //                     EndYear: vm.currentItem.yearTo
    //                 }
    //             };

    //             if(itemId != null) {
    //                 sendData.Education.Id = itemId;
    //             }

    //             $ionicLoading.show({
    //                 template: (itemId != null ? 'Editing' : 'Adding') + ' a course'
    //             });

    //             PortfolioService.sendPortfolioInfo(sendData)
    //                 .then(function() {
    //                     $ionicLoading.hide();
    //                     $state.go("app.portfolio");
    //                 })
    //                 .catch(function(err) {
    //                     $error(err);
    //                     $ionicLoading.hide();
    //                     $state.go("app.portfolio");
    //                 });

    //             sendData = null;

    //             return;
    //         }

    //         vm.showAlert = true;
    //     }

    //     function onCancel() {
    //         $state.go("app.portfolio");
    //     }
    // }

})();
