'use strict';

angular.module('starter.controllers', ['MetasAppServices', 'MetasAppFilters', 'MetasAppFilters'])

.controller('MetaController', function($scope, MetasAppProdutividade, $stateParams){

  var today = new Date();

  $scope.ano = today.getFullYear();
  $scope.mes = today.getMonth() + 1;
  $scope.grau = 1;

  $scope.anos = [];

  $scope.teste = $stateParams.anoId;

  /**
   * 
   * ATENÇÃO: 
   * 
   *  1. Informações anteriores à 2010 não devem ser exibidas
   *  2. No máximo 10 anos serão exibidos na lista de seleção de ano
   *
   */
  var i;
  for(i = 0; $scope.ano - i >= 2010 && i <= 10; i++) {
    var current = $scope.ano - i;
    $scope.anos.push(current);
  }

  $scope.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  $scope.item = {};
  $scope.indicador = '';

  $scope.tiposDecisao = [ 'A', 'C', 'M'];

  $scope.decisao = 'A';


  $scope.produtividades = [];

  $scope.loadingProdutividades = false;
  $scope.errorLoadingProdutividades = false;
  $scope.errorCounterProdutividades = 0;

  function hasRetriesProdutividades() {
    return ($scope.errorCounterProdutividades < 3);
  }

  $scope.canRetryLoadProdutividades = function() {
    return hasRetriesProdutividades();
  }

  function loadProdutividades(force) {

    if(force) {
      $scope.errorCounterProdutividades = 0;
    }

    if(!hasRetriesProdutividades()) {
      return;
    }

    $scope.produtividades = [];

    $scope.loadingProdutividades = true;
    $scope.errorLoadingProdutividades = false;

    MetasAppProdutividade.query({ano: $scope.ano, mes: $scope.mes, grau: $scope.grau}).$promise.then(

      function(produtividades) {

        $scope.produtividades = produtividades;
        $scope.loadingProdutividades = false;
        $scope.errorLoadingProdutividades = false;
        $scope.errorCounterProdutividades = 0;

      },

      function(failure) {

        $scope.loadingProdutividades = false;
        $scope.errorLoadingProdutividades = true;
        $scope.errorCounterProdutividades++;

      }

    );

  }

  $scope.refreshProdutividades = function() {

    loadProdutividades();

  };

  $scope.show = function(item, indicador) {

    $scope.item = item;
    $scope.indicador = indicador;

    loadProcessos(true);

  };

  $scope.processos = [];    

  $scope.loadingProcessos = false;
  $scope.errorLoadingProcessos = false;
  $scope.errorCounterProcessos = 0;

  function hasRetriesProcessos() {
    return ($scope.errorCounterProcessos < 3);
  }

  $scope.canRetryLoadProcessos = function() {
    return hasRetriesProcessos();
  }

  function loadProcessos(force) {

    if(force) {
      $scope.errorCounterProcessos = 0;
    }

    if(!hasRetriesProcessos()) {
      return;
    }

    $scope.processos = [];

    $scope.loadingProcessos = true;
    $scope.errorLoadingProcessos = false;

    Metas7Processos.query({ano: $scope.ano, mes: $scope.mes, grau: $scope.grau, magistrado: $scope.item.magistradoId, orgao: $scope.item.orgaoId, indicador: $scope.indicador}).$promise.then(

      function(processos) {

        $scope.processos = processos;
        $scope.loadingProcessos = false;
        $scope.errorLoadingProcessos = false;
        $scope.errorCounterProcessos = 0;

      },

      function(failure) {

        $scope.loadingProcessos = false;
        $scope.errorLoadingProcessos = true;
        $scope.errorCounterProcessos++;

      }

    );

  }

  $scope.refreshProcessos = function() {

    loadProcessos();
    
  };

  loadProdutividades(true);



});


  