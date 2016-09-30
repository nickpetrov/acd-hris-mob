(function() {

    angular
        .module("acdn-hris")
        .factory("Moment", Moment);

    function Moment($window) {
        return $window.moment;
    }

})();

