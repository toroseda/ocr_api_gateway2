(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .controller('EdmsRequestOcrDataDeleteController',EdmsRequestOcrDataDeleteController);

    EdmsRequestOcrDataDeleteController.$inject = ['$uibModalInstance', 'entity', 'EdmsRequest'];

    function EdmsRequestOcrDataDeleteController($uibModalInstance, entity, EdmsRequest) {
        var vm = this;

        vm.edmsRequest = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            EdmsRequest.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
