(function() {

    angular
        .module("acdn-hris")
        .factory("GabeService", GabeService);

    function GabeService(

    ) {
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return {
            createYearsArray: createYearsArray,
            getMonth: getMonth
        };

        function createYearsArray(firstValue, secondValue) {
            if(arguments.length > 2) return;

            firstValue = firstValue || new Date().getFullYear();
            secondValue = secondValue || 1950;

            if (secondValue > firstValue) {
                var s = firstValue;
                firstValue = secondValue;
                secondValue = s;
                s = null
            }

            var arr = [];

            for(var i = 1; i > 0; i++) {
                if(firstValue < secondValue) {
                    break;
                }
                arr.push(firstValue--);
            }
            console.log(arr);
            return arr;
        }

        function getMonth() {
            return month.slice();
        }
    }

})();