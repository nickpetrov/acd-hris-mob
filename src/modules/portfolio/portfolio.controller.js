(function() {

    angular
        .module("acdn-hris.app")
        .controller("PortfolioCtrl", PortfolioCtrl);

    function PortfolioCtrl(
        PortfolioService,
        $error
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.portfolioInfo = {};
        vm.loadingBar = false;
        vm.initPortfolio = initPortfolio;

        initPortfolio();

        function initPortfolio() {
            PortfolioService.getPortfolioInfo()
                .then(function(portfolioInfo) {
                    vm.portfolioInfo = portfolioInfo;
                    vm.loadingBar = true;
                })
                .then(PortfolioService.updatePortfolioInfo)
                .then(function(portfolioInfo) {
                    vm.portfolioInfo = portfolioInfo;
                    vm.loadingBar = false;
                })
                .catch(function(err) {
                    $error(err);
                });
        }


    }

})();
