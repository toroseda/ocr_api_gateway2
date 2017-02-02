(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .controller('EdmsRequestOcrDataDetailController', EdmsRequestOcrDataDetailController);

    EdmsRequestOcrDataDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'EdmsRequest', 'OcrSession', 'RequestWf'];

    function EdmsRequestOcrDataDetailController($scope, $rootScope, $stateParams, previousState, entity, EdmsRequest, OcrSession, RequestWf) {
        var vm = this;

        vm.edmsRequest = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('ocrApiGateway2App:edmsRequestUpdate', function(event, result) {
            vm.edmsRequest = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
