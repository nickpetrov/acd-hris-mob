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
			login: "",
			password: "",
			preferred: "Spirit",
			firstName: 'John',
			lastName: "Bloggs",
			birth: "12/09/1985",
			email:  "sandbox@agedcaredn.com.au",
			mobile: "0412345678"
		};

		function login() {
			if(vm.formData.login && vm.formData.password) {
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