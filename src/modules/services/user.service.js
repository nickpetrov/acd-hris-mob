(function() {

    angular
        .module("acdn-hris")
        .service("UserService", UserService);

    function UserService() {
        var sm = this;

        sm.userInfo = {};
    }

})();