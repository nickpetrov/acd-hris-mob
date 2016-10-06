(function() {

    angular
        .module("acdn-hris.app")
        .factory("PortfolioService", PortfolioService);

    function PortfolioService(
        Restangular,
        TokenService
    ) {
        var portfolioInfo = {
            education: [],
            employment: []
        };

        return {
            addNewItem: addNewItem,
            getItemByIndex: getItemByIndex,
            getAllEducations: getAllEducations,
            getAllExperiences: getAllExperiences,
            updatePortfolioInfo: updatePortfolioInfo
        };

        function addNewItem(label, data) {
            portfolioInfo[label].push(data);
        }

        function getItemByIndex(label, index) {
            return portfolioInfo[label][index];
        }

        function getAllEducations() {
            return portfolioInfo.education;
        }

        function getAllExperiences() {
            return portfolioInfo.experience;
        }

        function getPortfolioInfo() {
            return Restangular.one("/api/member/eportfolio/", TokenService.getToken())
                .get()
                .then(function(result) {
                    return result.plain();
                });
        }

        function updatePortfolioInfo() {
            return getPortfolioInfo()
                .then(function(newPortfolioInfo) {
                    portfolioInfo.education = newPortfolioInfo.Education;
                    portfolioInfo.employment = newPortfolioInfo.Employment;
                    return portfolioInfo;
                });
        }

    }

})();
