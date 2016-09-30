(function() {

    angular
        .module("acdn-hris.app")
        .service("PortfolioService", PortfolioService);

    function PortfolioService() {
        var sm = this;

        sm.portfolioInfo = {
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

        sm.addNewItem = addNewItem;
        sm.getAllEducations = getAllEducations;
        sm.getAllExperiences = getAllExperiences;

        function addNewItem(label, data) {
            sm.portfolioInfo[label].push(data);
        }
        
        function getAllEducations() {
            return sm.portfolioInfo.education;
        }

        function getAllExperiences() {
            return sm.portfolioInfo.experience;
        }
    }

})();
