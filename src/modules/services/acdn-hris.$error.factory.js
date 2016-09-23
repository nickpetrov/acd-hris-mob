(function() {

    angular
        .module("acdn-hris")
        .factory("$error", ErrorFactory);

    function ErrorFactory($log) {
        return function(err, option) {
            option === "exception" ? $log.error.apply($log, err) : $log.error(err);
        }
    }

})();
