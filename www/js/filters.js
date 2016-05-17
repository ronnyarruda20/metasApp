'use strict';

angular.module('MetasAppFilters', [])

  .filter('mesEstendido', function() {
  
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
      
    return function(input) {
      return meses[input-1];
    };
    
  })
  
  .filter('grauEstendido', function() {
  
    return function(input) {
      return input === 1 ? 'Juízes Eleitorais (1\u00BA Grau)' : 'Membros da Corte (2\u00BA Grau)';
    };
  
  })
  
  .filter('indicadorEstendido', function() {
  
    return function(input) {
    
      switch(input) {
        case 'SP': return "Sessões Plenárias";
        case 'DI': return "Decisões interlocutórias";
        case 'DIM': return "Decisões interlocutórias monocráticas";
        case 'DIC': return "Decisões interlocutórias colegiadas";
        case 'CM': return "Julgamentos com mérito";
        case 'CMM': return "Julgamentos com mérito monocráticos";
        case 'CMC': return "Julgamentos com mérito colegiados";
        case 'SM': return "Julgamentos sem mérito";
        case 'SMM': return "Julgamentos sem mérito monocráticos";
        case 'SMC': return "Julgamentos sem mérito colegiados";
        case 'HA': return "Homologações de acordo";
        case 'AP': return "Audiências presididas";
        case 'DA': return "Decisões administrativas";
        case 'ART557': return "Decisões Art.557 CPC";
        default: return '';
      }
      
    };
    
  })

  .filter('tipoDecisaoEstendida', function() {

    return function(input) {

      switch(input) {
        case 'A': return 'Colegiadas e Monocráticas';
        case 'C': return 'Apenas Colegiadas';
        case 'M': return 'Apenas Monocráticas';
        default: return '';
      }

    };

  })
  
  .filter('protocoloFormat', function() {
  
    return function(input) {
    
      var protocolo = new String(input);
      
      return protocolo.substr(0, protocolo.length - 4) + '/' + protocolo.substr(protocolo.length - 4);
      
    };
  
  })
  
;

