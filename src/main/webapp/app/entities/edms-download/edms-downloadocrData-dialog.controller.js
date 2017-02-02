(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .controller('EdmsDownloadOcrDataDialogController', EdmsDownloadOcrDataDialogController);

    EdmsDownloadOcrDataDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'EdmsDownload', 'EdmsLocation'];

    function EdmsDownloadOcrDataDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, EdmsDownload, EdmsLocation) {
        var vm = this;

        vm.edmsDownload = entity;
        vm.clear = clear;
        vm.save = save;
        vm.edmslocations = EdmsLocation.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.edmsDownload.id !== null) {
                EdmsDownload.update(vm.edmsDownload, onSaveSuccess, onSaveError);
            } else {
                EdmsDownload.save(vm.edmsDownload, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('ocrApiGateway2App:edmsDownloadUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
