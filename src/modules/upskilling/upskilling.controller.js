(function() {

    angular
        .module("acdn-hris.app")
        .controller("UpskillingCtrl", UpskillingCtrl);

    function UpskillingCtrl(
        UserService,
        UpskillingService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.userInfo = UserService.userInfo;
        vm.citizenships = UpskillingService.getCitizenships();
        vm.qualification = UpskillingService.getQualification();
        vm.studyStatus = UpskillingService.getStudyStatus();
        vm.selectData = {
            citizenships:  null,
            qualification: null,
            studyStatus: null
        };
        vm.sendMessage = sendMessage;

        function sendMessage() {
            for(var key in vm.formData) {
                vm.formData[key] = "";
            }
        }

    }

})();
