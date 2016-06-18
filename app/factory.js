;
(function() {


    /**
     * Sample factory
     *
     * You can fetch here some data from API and the use them
     * in controller
     * 
     */
    angular
        .module('airbooking')
        .factory('flightService', flightService);

    flightService.$inject = ['$http', '$q', '$timeout', 'LocalStorage'];


    ////////////


    function flightService($http, $q, $timeout, LocalStorage) {
        var flights = [];
        return {
            getAvailableFlights: function(origin, destination, isForceRefresh) {
                // 'origin' and 'destination' are mockup data
                var deferred = $q.defer();

                if (flights.length > 0 && !isForceRefresh) {
                    deferred.resolve(flights);
                    return flights;
                } else {
                    flights = [];
                    return $timeout(function() {
                        for (var i = 0; i < 3; i++) {
                            flights.push({
                                departureDate: new Date().setHours(10),
                                arrivalDate: new Date().setHours(15),
                                origin: origin,
                                destination: destination,
                                price: Math.floor((Math.random() * 1000) + 500) // random price
                            });
                        }
                        deferred.resolve(flights);
                        return flights;
                    });
                }

                // it should call API with param to return tickets

                return deferred.promise;
            }
        };
    }
})();
