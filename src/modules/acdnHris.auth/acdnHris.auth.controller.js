(function() {

	angular
		.module("acdnHris.auth")
		.controller("AuthCtrl", AuthCtrl);

	function AuthCtrl($scope) {
		$scope.test = "Auth page";
	}

})();