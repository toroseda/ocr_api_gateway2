(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .controller('ServiceWfOcrDataDetailController', ServiceWfOcrDataDetailController);

    ServiceWfOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'ServiceWf', 'ServiceResp'];

    function ServiceWfOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, ServiceWf, ServiceResp) {
        var vm = this;

        vm.serviceWf = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGateway2App:serviceWfUpdate', function(event, result) {
            vm.serviceWf = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
