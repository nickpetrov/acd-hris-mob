(function() {

    angular
        .module("acdn-hris.app")
        .controller("PortfolioCtrl", PortfolioCtrl);

    function PortfolioCtrl(
        PortfolioInfo
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.portfolioInfo = PortfolioInfo;
        console.log(vm.portfolioInfo);
    }

})();
