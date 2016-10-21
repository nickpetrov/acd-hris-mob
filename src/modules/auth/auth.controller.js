(function() {

	angular
		.module("acdn-hris.auth")
		.controller("AuthCtrl", ACDN.Core.MembershipPortal.get("AuthCtrl"));

})();