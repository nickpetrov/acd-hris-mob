(function() {

    angular
        .module("acdn-hris.app")
        .service("UpskillingService", ACDN.Core.MembershipPortal.get("UpskillingService"));

})();