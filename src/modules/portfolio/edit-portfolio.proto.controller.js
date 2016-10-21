(function() {
    "ngNoInject";
    var loaderWidget = angular.isDefined('ionicLoading') ? '$ionicLoading' : "$uibModal";

    EditPortfolioCtrl.$inject = [
        '$scope',
        '$state',
        loaderWidget,
        'PortfolioService'
    ];

    angular
        .module("acdn-hris.app")
        .controller("EditPortfolioCtrl", ACDN.Core.MembershipPortal.get("EditPortfolioCtrl"));
        
})();