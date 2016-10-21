(function() {

    angular
        .module("acdn-hris.app")
        .factory("PortfolioService", ACDN.Core.MembershipPortal.get("PortfolioService"));

})();
