(function() {

	angular
		.module("acdn-hris.auth")
		.controller("AuthCtrl", AuthCtrl);

	function AuthCtrl(
		$state,
		UserService
	) {
		/* jshint validthis: true */
		var vm = this;

		vm.errorAlert = false;
		vm.login = login;
		vm.formData = {
			userName: "",
			password: ""
		};

		function login() {
			if(vm.formData.userName && vm.formData.password) {
				UserService.userInfo = vm.formData;
				vm.errorAlert = false;
				$state.go("app.dashboard");
			} else {
				UserService.userInfo = {};
				vm.errorAlert = true;
			}
		}
	}

})();