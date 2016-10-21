(function() {

    angular
        .module("acdn-hris")
        .factory("TokenService", ACDN.Core.MembershipPortal.get("TokenService"));

})();