(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEmploymentCtrl", EditEmploymentCtrl);

    function EditEmploymentCtrl(
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.test = "Edit employment page";
    }

})();
