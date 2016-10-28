(function() {

	angular
		.module("acdn-hris.auth")
		.controller("AuthProtoCtrl", ACDN.Core.MembershipPortal.get("AuthProtoCtrl"))
		.controller("AuthCtrl", AuthCtrl);

	function AuthCtrl(
		$controller
	) {
		var vm = this;
		vm.nextState = "app.dashboard";
		$controller("AuthProtoCtrl", {
			$scope: vm
		})
	}

})();