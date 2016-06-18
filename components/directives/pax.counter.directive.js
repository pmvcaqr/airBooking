;
(function() {


    'use strict';

    /**
     * Responsive navigation
     *
     * Usage:
     * <responsive-nav></responsive-nav>
     *
     * Example in main-nav.html file
     * 
     */
    angular.module('airbooking')
        .directive('paxCounter', paxCounter);

    function paxCounter() {

        // Definition of directive
        var directiveDefinitionObject = {
            restrict: 'AE',
            templateUrl: 'components/directives/pax-counter.html',
            scope: {
                title: '@title',
                counter: '=counter',
            },
            link: function(scope, elem, attrs, ctrl) {

            },
            controller: function($scope) {
                // Scope funtions
                $scope.increase = increase;
                $scope.decrease = decrease;

                activate();

                function activate() {
                    if (!$scope.counter) {
                        $scope.counter = 0;
                    }
                }

                function decrease() {
                    if ($scope.counter > 0) {
                        $scope.counter--;
                    }
                }

                function increase() {
                    if ($scope.counter < 10) {
                        $scope.counter++;
                    }
                }
            }
        };

        return directiveDefinitionObject;
    }


})();
