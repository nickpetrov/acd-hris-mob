(function() {

    angular
        .module("acdn-hris.app")
        .factory("PortfolioService", PortfolioService);

    function PortfolioService(
        $q,
        Restangular,
        TokenService,
        GabeService
    ) {
        var _portfolioInfo = {
            education: [],
            employment: []
        };

        return {
            getSelectData: getSelectData,
            getPortfolioInfo: getPortfolioInfo,
            getPortfolioInfoById: getPortfolioInfoById,
            updatePortfolioInfo: updatePortfolioInfo,
            sendPortfolioInfo: sendPortfolioInfo,
            deletePortfolioInfo: deletePortfolioInfo
        };

        function getSelectData() {
            var selectData = {};
            selectData.month = GabeService.getMonths();
            selectData.yearsFrom = GabeService.createYearsArray();

            Object.defineProperty(selectData, "yearsTo", { // adding at selectData object 'to' years data
                configurable: true,
                enumerable: true,
                get: function() {
                    var c = this.yearsFrom.slice();
                    c.unshift("Present");
                    return c;
                }
            });

            return selectData;
        }

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
