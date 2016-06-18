/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;
(function() {

    angular
        .module('airbooking')
        .controller('MainController', MainController)
        .controller('BookingController', BookingController)
        .controller('PaymentController', PaymentController);

    MainController.$inject = ['LocalStorage', 'QueryService'];
    BookingController.$inject = ['$location', 'LocalStorage', 'QueryService', 'flightService'];
    PaymentController.$inject = [];

    function MainController(LocalStorage, QueryService) {

        var self = this;
    }


    function BookingController($location, LocalStorage, QueryService, flightService) {
        var vm = this;

        // Scope variables
        vm.paxAdults = 1;
        vm.paxKids = 0;
        vm.paxInfant = 0;
        vm.isTwoWayFlight = true;
        vm.tickets = [];
        vm.departureDate = new Date();
        vm.selectedTickets = {
            departure: null,
            return: null
        }; // this object contains ticket objects for handle (payment, etc.)

        // Scope funtions
        vm.getTickets = getTickets;
        vm.resetFlight = resetFlight;
        vm.goToPayment = goToPayment;
        vm.selectDepartureTicket = selectDepartureTicket;
        vm.selectReturnTicket = selectReturnTicket;

        activate();

        function activate() {
            console.log(vm.selectedOrigin);
        }

        function getTickets() {
            flightService.getAvailableFlights(vm.selectedOrigin, vm.selectedDestination, true).then(function(tickets) {
                vm.tickets = tickets;
            })
        }

        function resetFlight() {
            vm.isTwoWayFlight = true;
            vm.tickets = [];
        }

        function goToPayment(selectedTicket) {
            if (!vm.selectedTickets.departure || !vm.selectedTickets.return) {
                alert('Please select flight/ticket!'); // should use toast notification
                return false;
            }

            $location.path('/payment');
        }

        function selectDepartureTicket(index) {
            var currentSelectedElem = angular.element(document.querySelector('.departure.selected'));
            currentSelectedElem.removeClass('selected');

            var selectedElem = angular.element(document.querySelector('#departure-' + index));
            selectedElem.addClass('selected');

            vm.selectedTickets.departure = vm.tickets[index];
        }

        function selectReturnTicket(index) {
            var currentSelectedElem = angular.element(document.querySelector('.return.selected'));
            currentSelectedElem.removeClass('selected');

            var selectedElem = angular.element(document.querySelector('#return-' + index));
            selectedElem.addClass('selected');

            vm.selectedTickets.return = vm.tickets[index];
        }
    }

    function PaymentController() {
        var vm = this;
    }
})();
