(function() {

    angular
        .module("acdnHris")
        .factory("$exceptionHandler", ExceptionHandlerFactory);

    function ExceptionHandlerFactory($error) {
        return function(exception, cause) {
            $error(arguments, "exception");
        }
    }

})();
