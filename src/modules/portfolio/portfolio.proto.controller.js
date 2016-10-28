(function() {

    angular
        .module("acdn-hris.app")
        .controller("PortfolioProtoCtrl", ACDN.Core.MembershipPortal.get("PortfolioProtoCtrl"))
        .controller("PortfolioCtrl", PortfolioCtrl);

    function PortfolioCtrl(
        $scope,
        $controller,
        $ionicLoading,
        $ionicPopup,
        $ionicSlideBoxDelegate
    ) {
        var vm = this;
        vm.nextStatePrefix = "app.edit-";
        vm.editModeEnabled = false;
        vm.confirmPopup = {
            show: $ionicPopup.confirm
        };
        vm.confirmPopupConfig = {
            template: "Are you sure you want to delete this entry?"
        };

        vm.toggleEditMode = function() {
            vm.editModeEnabled = !vm.editModeEnabled;
        };
        vm.slideTo = function(index) {
            $ionicSlideBoxDelegate.slide(index);
        }

        $scope.$watch(function() {
            return vm.loadingBar;
        }, function(loading) {
            loading ? $ionicLoading.show({
                content: 'Loading your ePortfolio',
                animation: 'fade-out'
            }) : $ionicLoading.hide()
        });

        $controller("PortfolioProtoCtrl", {
            $scope: vm
        });
    }

})();
