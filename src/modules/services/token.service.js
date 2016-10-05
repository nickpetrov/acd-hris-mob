(function() {

    angular
        .module("acdn-hris")
        .factory("TokenService", TokenService);
    
    function TokenService(
        $localStorage
    ) {
        return {
            getToken: getToken,
            setToken: setToken
        };

        function getToken() {
            return $localStorage.token;
        }

        function setToken(token) {
            $localStorage.token = token;
        }
    }

})();