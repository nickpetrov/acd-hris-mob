(function() {

    angular
        .module("acdn-hris.app")
        .controller("PortfolioCtrl", PortfolioCtrl);

    function PortfolioCtrl(
        $state,
        PortfolioService,
        $error
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.portfolioInfo = {};
        vm.initPortfolio = initPortfolio;
        vm.deletePortfolioItem = deletePortfolioItem;
        vm.editPortfolioItem = editPortfolioItem;

        initPortfolio();

        function initPortfolio() {
            PortfolioService.getPortfolioInfo()
                .then(function(portfolioInfo) {
                    vm.portfolioInfo = portfolioInfo;
                    vm.loadingBar = true;
                })
                .then(PortfolioService.updatePortfolioInfo)
                .then(function() {
                    vm.loadingBar = false;
                })
                .catch(function(err) {
                    $error(err);
                });
            
        }
        
        function deletePortfolioItem(id) {
            PortfolioService.deletePortfolioInfo(id)
                .then(function() {
                    vm.loadingBar = true;
                })
                .then(PortfolioService.updatePortfolioInfo)
                .then(function() {
                    vm.loadingBar = false;
                })
                .catch(function(err) {
                    $error(err);
                });
        }

        function editPortfolioItem(label, id) {
            $state.go("app.edit-" + label, {id: id});
        }

    }

})();
