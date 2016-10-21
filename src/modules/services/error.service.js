(function() {

	angular
		.module("acdn-hris")
		.factory("$error", ACDN.Helpers.get("$error"))
		.factory("$exceptionHandler", ACDN.Helpers.get("ExceptionHandlerFactory"))
		
})();