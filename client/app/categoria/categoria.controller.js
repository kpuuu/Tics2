'use strict';

angular.module('bibliotecaApp')
  .controller('CategoriaCtrl', function ($scope, $http, User) {
    $scope.categorias=[];
    $scope.categoria = {};


  	
    $http.get('api/categorias')
    	.success(function(categorias){
    		$scope.categorias = categorias;
    		console.log($scope.categorias);
    		socket.syncUpdates('categoria', $scope.categorias);
    	});
   
    $scope.addcategoria = function(algo){
    	console.log(algo);
    	$http.post('api/categorias',algo)
    		.success(function(data){
    			console.log(data);
    		});
    };

    $scope.getcategoria = function(cosa){
      //console.log(cosa);
      //$scope.prestamo = cosa;,
      $scope.nombre_categoria = cosa.nombre_categoria
      var prestamo = {
        prestamo : $scope.nombre_categoria,

      }

       $http.post('api/users/addbook',cosa)
        .success(function(data){
         console.log(data);
         console.log(User.get());
        });



      //console.info($scope.prestamo);

    };


    $scope.deletecategoria = function(categoria){
     // console.log('libro');
      //console.log(libro);
     $http.delete('api/categorias/' + categoria._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('categoria');
    });


  });
