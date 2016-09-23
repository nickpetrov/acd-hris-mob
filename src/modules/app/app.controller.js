(function() {

    angular
        .module("acdn-hris.app")
        .controller("AppCtrl", AppCtrl);

    function AppCtrl(
        $ionicModal,
        $scope,
        $state
    ) {
        var vm = this;
        var userMenuModal = null;

        vm.menuTitle = "Features";
        vm.showUserMenu = showUserMenu;

        $scope.hideUserMenu = hideUserMenu;
        $scope.showDashboard = showDashboard;
        $scope.showMyDetails = showMyDetails;
        $scope.logout = logout;

        //Creating instance of modal
        $ionicModal.fromTemplateUrl('templates/app/user-menu-modal.html', {
            animation: 'slide-in-up',
            scope: $scope
        }).then(function(modal) {
            userMenuModal = modal;
        });

        //Show modal
        function showUserMenu() {
            userMenuModal.show();
        }

        //Hide modal
        function hideUserMenu() {
            userMenuModal.hide();
        }

        //Action after pressing "Members home" button in user menu
        function showDashboard() {
            userMenuModal.hide();
            $state.go("app.dashboard");
        }

        //Action after pressing "My Details" button in user menu
        function showMyDetails() {
            userMenuModal.hide();
        }

        //Action after pressing "Logout" button in user menu
        function logout() {
            userMenuModal.hide();
            $state.go("auth");
        }
    }

})();