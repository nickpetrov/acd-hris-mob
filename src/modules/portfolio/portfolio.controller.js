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
        vm.initPortfolio = initPortfolio;

        initPortfolio();

        function initPortfolio() {
            PortfolioService.getPortfolioInfo()
                .then(function(portfolioInfo) {
                    vm.portfolioInfo = portfolioInfo;
                })
                .then(PortfolioService.updatePortfolioInfo)
                .then(function(portfolioInfo) {
                    vm.portfolioInfo = portfolioInfo;
                })
                .catch(function(err) {
                    $error(err);
                });
        }


    }

})();
