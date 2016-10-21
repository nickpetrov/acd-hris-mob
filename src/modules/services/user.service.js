(function() {

    angular
        .module("acdn-hris")
        .service("UserService", ACDN.Core.MembershipPortal.get("UserService"));

})();