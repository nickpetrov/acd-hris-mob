(function() {

    angular
        .module("acdn-hris.app")
        .controller("PortfolioCtrl", PortfolioCtrl);

    function PortfolioCtrl(
        $scope,
        $ionicModal,
        PortfolioService,
        Moment
    ) {
        var vm = this;
        var modalInstance = null;
        var modalTemplates =  {
            education: "templates/portfolio/education.modal.template.html",
            experience: "templates/portfolio/experience.modal.template.html"
        };

        vm.showModal = showModal;
        vm.hideModal = hideModal;
        vm.saveModalData = saveModalData;
        vm.alertForm = false;
        vm.itemsEducation = PortfolioService.getAllEducations();
        vm.newEducation = {};
        vm.newExperience = {};
        vm.dateFrom = {
            date: new Date(),
            callback: function(value){
                vm.newEducation.dateFrom = value;
            }
        };
        vm.dateTo = {
            date: new Date(),
            callback: function(value){
                vm.newEducation.dateTo = value;
            }
        };

        function showModal(name) {
            $ionicModal.fromTemplateUrl(modalTemplates[name], {
                animation: 'slide-in-up',
                scope: $scope
            }).then(function(modal) {
                modal.show();
                modalInstance = modal;
            });
        }

        function cleanModal() {
            vm.newEducation = {};
            vm.newExperience = {};
        }

        function hideModal() {
            modalInstance.hide();
            modalInstance = null;
        }

        function saveModalData(label) {
            var result = null;
            if($scope.portfolio.modalForm.$valid && vm.newEducation.dateFrom && vm.newEducation.dateTo) {
                result = {};
                if(label == "education") {
                    result.org = vm.newEducation.org;
                    result.course = vm.newEducation.course;
                    result.dateFrom = Moment(vm.newEducation.dateFrom).format("MMMM YYYY");
                    result.dateTo = Moment(vm.newEducation.dateTo).format("MMMM YYYY");

                    PortfolioService.addNewItem("education", result);
                }

                result = null;
                cleanModal();
                hideModal();
            }
        }
    }

})();
