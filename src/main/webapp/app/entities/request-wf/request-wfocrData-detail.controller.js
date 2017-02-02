(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .controller('RequestWfOcrDataDetailController', RequestWfOcrDataDetailController);

    RequestWfOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'RequestWf', 'EdmsRequest'];

    function RequestWfOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, RequestWf, EdmsRequest) {
        var vm = this;

        vm.requestWf = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGateway2App:requestWfUpdate', function(event, result) {
            vm.requestWf = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
