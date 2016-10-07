(function() {

    angular
        .module("acdn-hris.app")
        .controller("EditEducationCtrl", EditEducationCtrl);

    function EditEducationCtrl(
        GabeService
    ) {
        /* jshint validthis: true */
        var vm = this;

        vm.onSave = onSave;
        vm.selectData = {
            month: GabeService.getMonth(),
            yearsFrom: GabeService.createYearsArray()
        };
        vm.currentItem = {
            org: "",
            course: "",
            monthFrom: vm.selectData.month[5],
            yearFrom: 1991,
            monthTo: vm.selectData.month[6],
            yearTo: null
        };


        function onSave() {
            console.log(vm.currentItem);
        }
    }

})();
