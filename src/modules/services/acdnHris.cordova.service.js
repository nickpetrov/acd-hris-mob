(function() {

    angular
        .module("acdnHris")
        .service("CordovaService", CordovaService);

    function CordovaService(
        $ionicPlatform,
        $cordovaEmailComposer,
        $error,
        $ionicPopup
    ) {
        var self = this;

        //Function fot sending email
        self.sendEmail = function() {
            var mailTemplate = {
                to: 'info@agedcaredn.com.au'
            };

            $ionicPlatform.ready(function() {
                $cordovaEmailComposer.isAvailable().then(
                    function() {
                        return $cordovaEmailComposer.open(mailTemplate);
                    },
                    function() {
                        $ionicPopup.alert({
                            title: 'You cant send email',
                            template: 'Please make sure you have configured an email account and have installed an email app'
                        })
                        .then(function(res) {
                            $error("You cant send email. Please make sure you have configured an email account and have installed an email app.");
                        });
                    }
                ).catch(function(err) {
                    $error("Error with sending email \n", err);
                });
            });

        };
    }

})();
