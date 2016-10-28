(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditPortfolioProtoCtrl", ACDN.Core.MembershipPortal.get("EditPortfolioProtoCtrl"))
        .controller("EditPortfolioCtrl", EditPortfolioCtrl);
       
    function EditPortfolioCtrl(
    	$scope,
        $state,
    	$controller,
    	$ionicLoading
    ) {
    	var vm = $scope;

    	vm.loader = $ionicLoading;

    	var nextAction = function() {
            return $state.go("app.portfolio");
        };

        vm.handleSuccess = nextAction;
        vm.handleCancel = nextAction;
    	
    	$controller("EditPortfolioProtoCtrl", {
    		$scope: vm
    	});
    }

})();