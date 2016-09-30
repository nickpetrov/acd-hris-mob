(function() {

    angular
        .module("acdn-hris")
        .service("UserService", UserService);

    function UserService() {
        var sm = this;

        sm.userInfo = {};

        sm.getUserInfo = getUserInfo;

        function getUserInfo() {
            return sm.userInfo;
        }
    }

})();