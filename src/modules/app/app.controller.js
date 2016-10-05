(function() {

    angular
        .module("acdn-hris.app")
        .controller("AppCtrl", AppCtrl);

    function AppCtrl(
        $ionicModal,
        $scope,
        $state,
        CordovaService
    ) {
        var vm = this;
        var userMenuModal = null;

        vm.menuTitle = "Features";
        vm.showUserMenu = showUserMenu;
        vm.hideUserMenu = hideUserMenu;
        vm.showDashboard = showDashboard;
        vm.showMyDetails = showMyDetails;
        vm.logout = logout;
        vm.openInBrowse = openInBrowse;

        //Creating instance of modal
        $ionicModal.fromTemplateUrl('templates/app/user-menu-modal.template.html', {
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
            $state.go("app.userDetails");
        }

        //Action after pressing "Logout" button in user menu
        function logout() {
            userMenuModal.hide();
            $state.go("auth");
        }

        function openInBrowse(label) {
            CordovaService.openInAppBrowser(label);
        }
    }

})();