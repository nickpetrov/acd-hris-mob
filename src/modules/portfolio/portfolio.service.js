(function() {

    angular
        .module("acdn-hris.app")
        .factory("PortfolioService", PortfolioService);

    function PortfolioService() {
        var portfolioInfo = {
            education: [
                {
                    org: "Certificate IV in Aged Care",
                    course: "Chishoim Institute",
                    dateFrom: "November 2001",
                    dateTo: "September 2002"
                },
                {
                    org: "Certificate III in Aged Care",
                    course: "Education Institute",
                    dateFrom: "February 1996",
                    dateTo: "August 1996"
                }
            ],
            experience: []
        };

        var service = {
            addNewItem: addNewItem,
            getItemByIndex: getItemByIndex,
            getAllEducations: getAllEducations,
            getAllExperiences: getAllExperiences
        };

        return service;


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

        }

    }

})();
