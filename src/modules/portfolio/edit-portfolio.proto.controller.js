(function() {
    "ngNoInject";

    angular
        .module("acdn-hris.app")
        .controller("EditPortfolioCtrl", ACDN.Core.MembershipPortal.get("EditPortfolioCtrl"));
        
})();