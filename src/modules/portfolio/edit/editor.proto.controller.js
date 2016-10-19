(function() {

	angular
		.module("acdn-hris.app")
		.controller("EditPortfolioCtrl", EditPortfolioCtrl);

	function EditPortfolioCtrl(
		$scope, 
		$ionicLoading, 
		$stateParams, 
		PortfolioService
	) {
		var vm = this;
		var itemId = $stateParams;
       	
       	vm.portfolioPart = vm.portfolioPart || null;	// "Education" or "Employment"
       	vm.onSave = onSave;		//Save button
        vm.onCancel = onCancel; //Cancel button
        vm.showAlert = false; 	// Parameter of showing alert form validation
        vm.selectData = PortfolioService.getSelectData(); // Getting data for selects in view
        vm.currentItem = {};

        if(itemId != null && vm.portfolioPart != null) { // Fill form model for item editing if 'id' not null;
            var item = PortfolioService.getPortfolioInfoById(vm.portfolioPart.toLowercase, itemId);

            for (var prop in item) {
            	if (item.hasOwnProperty(prop)) {
            		vm.currentItem[prop] = item[prop];
            	};
            };
        };

        function onSave() { // Save button
            if(vm.form.$valid) {
                vm.showAlert = false;

                var sendData = {};
                sendData[vm.portfolioPart] = vm.currentItem

                if(itemId != null) {
                    sendData[vm.portfolioPart].Id = itemId;
                }

                $ionicLoading.show({
                    template: itemId != null ? 'Editing' : 'Adding'
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
});