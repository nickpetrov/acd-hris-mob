(function() {

    angular
        .module("acdn-hris.app")
        .service("UpskillingService", UpskillingService);
    
    function UpskillingService() {
        /* jshint validthis: true */
        var sm = this;
        var citizenships = [
            {
                name: "Australian Citizen",
                value: "12"
            },
            {
                name: "Permanent Resident",
                value: "13"
            },
            {
                name: "New Zealand Citizen",
                value: "14"
            },
            {
                name: "Visa allowing study",
                value: "15"
            },
            {
                name: "None of the above",
                value: "16"
            }
        ];
        var qualification = [
            {
                name: "Certificate IV or higher",
                value: "22"
            },
            {
                name: "Certificate III or lower",
                value: "23"
            }
        ];
        var studyStatus = [
            {
                name: "I am currently studying",
                value: "32"
            },
            {
                name: "I am not currently studying",
                value: "33"
            }
        ];

        sm.getCitizenships = getCitizenships;
        sm.getQualification = getQualification;
        sm.getStudyStatus = getStudyStatus;

        function getCitizenships() {
            return citizenships;
        }

        function getQualification() {
            return qualification;
        }

        function getStudyStatus() {
            return studyStatus;
        }
    }

})();