(function() {

    angular
        .module("acdn-hris.app")
        .controller("PortfolioCtrl", PortfolioCtrl);

    function PortfolioCtrl(
        $scope,
        $ionicModal,
        UserService
    ) {
        var vm = this;
        var modalInstance = null;
        var modalTemplates =  {
            education: "templates/portfolio/education.modal.template.html",
            experience: "templates/portfolio/experience.modal.template.html"
        };

        vm.userInfo = UserService.userInfo;
        vm.showModal = showModal;

        $scope.hideModal = hideModal;
        $scope.consoleQW = consoleQW;//Delete
        $scope.educationData = {
            org: "",
            course: "",
            date: ""
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

        function hideModal() {
            modalInstance.hide();
            modalInstance = null;
        }

        function consoleQW() {//Delete
            console.log($scope.educationData);
        }


    }

})();
