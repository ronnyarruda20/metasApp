

angular.module('MagistradoServices', ['ngResource'])

.factory('magistradoDados', function ($resource) {
    return $resource("http://localhost:8100/json/magistrados.json" );
    })

.factory('processosDados', function ($resource) {
    return $resource("http://localhost:8100/json/processos/:processoId.json" ,{processoId: "processoId"});
    });


/**
.factory('magistradoDados', function ($resource) {
    return $resource("http://localhost:8100/json/dados.json");
    });

.factory('magistradoDados', ['$resource',function($resource){
    return $resource('json/:magistradoId.json', {}, {
      query: {method:'GET', params:{magistradoId:'magistrados'}, isArray:true}
    });
  }]);

factory('magistradoDados', function ($resource) {
    return $resource('json/:magistradoId');
});

$resource('http://localhost:8100/json/datas.json')

.factory('magistradoDados', function ($resource) {
    return $resource("http://localhost:8100/json/datas.json");
    });

**/
