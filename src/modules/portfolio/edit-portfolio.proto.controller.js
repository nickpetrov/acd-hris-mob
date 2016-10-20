(function() {
    "ngNoInject";
    var loaderWidget = angular.isDefined('ionicLoading') ? '$ionicLoading' : "$uibModal";

    EditPortfolioCtrl.$inject = [
        '$scope',
        '$state',
        loaderWidget,
        'PortfolioService'
    ];

    angular
        .module("acdn-hris.app")
        .controller("EditPortfolioCtrl", EditPortfolioCtrl);

    /**
    * @description It's a kinda like Parent/Base controller 
    *   for edit [Education] and [Employment] experience in portfolio.
    *   It's initialize
    * @constructs EditEmploymentCtrl, EditEducationCtrl
    * @param {object} $scope - child's controller scope
    * @param {ionic.Service} $ionicLoading - service to show popup
    * @param {angular.Service} PortfolioService - custom service for
    *   manipulate user's portfolio data 
    *
    * @note "currentItem", "portfolioPart" and "itemId" controller's 
    *   fields sould be filled out in children scopes before inheriting
    *   them from this Base/Parent controller
    */
    function EditPortfolioCtrl(
        $scope,
        $state,
        $ionicLoading,
        PortfolioService
    ) {
        /**
        @member vm {object} ViewModel. Reference to the child scope
        */
        var vm = $scope;
        /**
        @function onSave {function} save button
        */
        vm.onSave = onSave;
        /**
        @function onCancel {function} cancel button
        */
        vm.onCancel = onCancel;
        /**
        @function isFormValid check if form is valid
        */
        vm.isFormValid = isFormValid;
        /**
        @member showAlert {bool} parameter of showing alert form validation 
        */
        vm.showAlert = false;
        /**
        @member selectData {object} retrievet date data for selects in view
        */
        vm.selectData = PortfolioService.getSelectData();

        // Fill form model for item editing if 'id' not null;
        if(vm.itemId != null && vm.portfolioPart != null) {
            var item = PortfolioService.getPortfolioInfoById(
                vm.portfolioPart.toLowerCase(), 
                vm.itemId
            );

            for (var prop in item) {
                if (item.hasOwnProperty(prop)) {
                    vm.currentItem[prop] = item[prop];
                };
            };
        };

        function isFormValid() {
            vm.showAlert = vm.validateForm();
        };

        function onSave() {
            if(vm.form.$valid) {
                vm.showAlert = false;

                var sendData = {};
                sendData[vm.portfolioPart] = vm.currentItem;

                if(vm.itemId != null) {
                    sendData[vm.portfolioPart].Id = vm.itemId;
                }

                $ionicLoading.show({
                    template: vm.itemId != null ? 'Editing' : 'Adding'
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
        };

        function onCancel() {
            $state.go("app.portfolio");
        };
    };
})();