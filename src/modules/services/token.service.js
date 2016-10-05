(function() {

    angular
        .module("acdn-hris")
        .factory("TokenService", TokenService);
    
    function TokenService(
        $localStorage
    ) {
        return {
            getToken: getToken,
            setToken: setToken,
            isToken: isToken
        };

        function getToken() {
            return $localStorage.token;
        }

        function setToken(token) {
            $localStorage.token = token;
            return token;
        }

        function isToken() {
            var token = getToken();
            return token ? token : false;
        }
    }

})();