(function() {

    angular
        .module("acdn-hris")
        .factory("CordovaService", CordovaService);

    function CordovaService(
        $ionicPlatform,
        $error,
        $ionicPopup,
        $cordovaEmailComposer,
        $cordovaInAppBrowser,
        $cordovaDatePicker
    ) {

        return {
            sendEmail: sendEmail,
            openInAppBrowser: openInAppBrowser,
            initDatePicker: initDatePicker
        };

        //Sending email
        function sendEmail() {

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
                        .then(function() {
                            $error("You cant send email. Please make sure you have configured an email account and have installed an email app.");
                        });
                    }
                ).catch(function(err) {
                    $error("Error with sending email \n", err);
                });
            });


        }

        //Opening inAppBrowser
        function openInAppBrowser(label) {
            var inAppOptions = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };

            var links = {
                job: "https://jobs.agedcaredn.com.au/",
                courses: "https://qintillmstest.azurewebsites.net/Learner/Dashboard"
            };

            $ionicPlatform.ready(function () {
                $cordovaInAppBrowser.open(links[label], '_blank', inAppOptions)
                    .then(function(event) {
                        // console.log("success");
                    })
                    .catch(function(event) {
                        // console.log("fatality");
                    });
            });
        }

        //Opening DatePicker
        function initDatePicker() {

            var datePickerOptions = {
                date: new Date(),
                mode: 'date', // or 'time'
                // minDate: new Date() - 10000,
                allowOldDates: true,
                allowFutureDates: false,
                doneButtonLabel: 'DONE',
                doneButtonColor: '#F2F3F4',
                cancelButtonLabel: 'CANCEL',
                cancelButtonColor: '#000000'
            };

            $ionicPlatform.ready(function () {

                $cordovaDatePicker.show(datePickerOptions).then(function(date){
                    console.log(date);
                });

            });

        }

    }

})();
