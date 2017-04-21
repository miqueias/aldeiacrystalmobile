angular.module('app.controllers')
.controller('PerfilController', ['$scope','$state','$ionicPopup',
	function($scope,$state,$ionicPopup)  {
	// body...
	$scope.user = {
		nome: 'Davi Lopes',
		telefone: '3010-4909',
        celular: '98819-6072',
        condominio: 'Edf. Clarita',
        apartamento: '201'
	};

	

}]);