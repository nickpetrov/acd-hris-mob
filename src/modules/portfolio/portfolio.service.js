(function() {

    angular
        .module("acdn-hris.app")
        .factory("PortfolioService", PortfolioService);

    function PortfolioService(
        $q,
        Restangular,
        TokenService
    ) {
        var _portfolioInfo = {
            education: [],
            employment: []
        };

        return {
            addNewItem: addNewItem,
            getItemByIndex: getItemByIndex,
            getPortfolioInfo: getPortfolioInfo,
            updatePortfolioInfo: updatePortfolioInfo,
            sendPortfolioInfo: sendPortfolioInfo,
            deletePortfolioInfo: deletePortfolioInfo
        };

        function addNewItem(label, data) {
            _portfolioInfo[label].push(data);
        }

        function getItemByIndex(label, index) {
            return _portfolioInfo[label][index];
        }

        function getPortfolioInfo() {
            return $q.resolve(_portfolioInfo);
        }

        function pullPortfolioInfo() {
            return Restangular.one("/api/member/eportfolio/", TokenService.getToken())
                .get()
                .then(function(result) {
                    return result.plain();
                });
        }

        function updatePortfolioInfo() {
            return pullPortfolioInfo()
                .then(function(newPortfolioInfo) {
                    _portfolioInfo.education = newPortfolioInfo.Education;
                    _portfolioInfo.employment = newPortfolioInfo.Employment;
                    return _portfolioInfo;
                });
        }

        function sendPortfolioInfo(data) {
            return Restangular.all("/api/member/eportfolio/" + TokenService.getToken()).post(data)
        }

        function deletePortfolioInfo(id) {
            return Restangular.all("/api/member/eportfolio/" + TokenService.getToken() + "/" + id).remove();
        }

    }

})();
