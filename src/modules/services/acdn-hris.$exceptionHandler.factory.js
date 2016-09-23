(function() {

    angular
        .module("acdn-hris")
        .factory("$exceptionHandler", ExceptionHandlerFactory);

    function ExceptionHandlerFactory($error) {
        return function(exception, cause) {
            $error(arguments, "exception");
        }
    }

})();
