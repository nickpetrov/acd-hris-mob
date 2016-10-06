(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEducationCtrl", EditEducationCtrl);

    function EditEducationCtrl(
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.test = "Edit education page";
    }

})();
