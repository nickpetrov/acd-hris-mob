(function() {

    angular
        .module("acdn-hris.app")
        .controller("UpskillingProtoCtrl", ACDN.Core.MembershipPortal.get("UpskillingProtoCtrl"))
        .controller("UpskillingCtrl", UpskillingCtrl);

    function UpskillingCtrl($controller) {
    	var vm = this;

    	$controller("UpskillingProtoCtrl", {
    		$scope: vm
    	});
    }

})();
