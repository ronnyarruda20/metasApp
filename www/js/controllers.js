angular.module('starter.controllers', ['MagistradoServices'])


.controller('MasgitradoCtrl', function($scope, magistradoDados) {
    $scope.magistrados = [];
    magistradoDados.query().$promise.then(function (data) {
        $scope.magistrados = data;
    })  
})

.controller('ProcessoCtrl', function($scope, $stateParams,processosDados) {
    $scope.processos = processosDados.query({processoId: $stateParams.processoId}, function(processo){
        $scope.processos = processo;
    });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('MenuMesCtrl', function($scope){
  $scope.meses = ["Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"]
})

.controller('MenuAnoCtrl', function($scope){
  $scope.anos = ["2010","2011","2012","2013","2014","2015","2016"]
});

  