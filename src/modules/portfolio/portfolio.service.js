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
            getPortfolioInfo: getPortfolioInfo,
            getPortfolioInfoById: getPortfolioInfoById,
            updatePortfolioInfo: updatePortfolioInfo,
            sendPortfolioInfo: sendPortfolioInfo,
            deletePortfolioInfo: deletePortfolioInfo
        };

        function getPortfolioInfo() {
            return $q.resolve(_portfolioInfo);
        }

        function getPortfolioInfoById(label, id) {
            for (var i = 0; i < _portfolioInfo[label].length; i++) {
                if(_portfolioInfo[label][i].Id == id) {
                    return _portfolioInfo[label][i];
                }
            }
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
