'use strict';

angular.module('MetasAppServices', ['ngResource'])


  .factory('MetasAppProdutividade', ['$resource',  function($resource) {
  
    return $resource('http://apps.tre-mt.jus.br/metas-cnj/metas7/produtividade/:ano/:mes/:grau', {}, {
    
      query: {method:'GET', isArray:true, timeout: 20000}
      
    });
    
  }])

 .factory('Metas7Processos', ['$resource', function($resource) {

    return $resource('http://apps.tre-mt.jus.br/metas-cnj/metas7/processos/:ano/:mes/:grau/:magistrado/:orgao/:indicador', {}, {
      
      query : {method:'GET', isArray:true, timeout: 20000}
    
    });

  }]);

