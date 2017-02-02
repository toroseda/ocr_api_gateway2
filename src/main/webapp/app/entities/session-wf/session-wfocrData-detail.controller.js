(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .controller('SessionWfOcrDataDetailController', SessionWfOcrDataDetailController);

    SessionWfOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SessionWf', 'OcrSession'];

    function SessionWfOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, SessionWf, OcrSession) {
        var vm = this;

        vm.sessionWf = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGateway2App:sessionWfUpdate', function(event, result) {
            vm.sessionWf = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
