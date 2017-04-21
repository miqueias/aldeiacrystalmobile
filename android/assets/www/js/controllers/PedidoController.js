angular.module('app.controllers')
.controller('PedidoController', ['$scope','$state','$ionicPopup', '$ionicLoading',
	function($scope,$state,$ionicPopup, $ionicLoading)  {
	// body...
	$scope.preco = {
		'5l': 5.00,
		'20l': 8.00
	};

    $scope.pedido = {
		'qtd_5l': 0,
		'qtd_20l': 0,
        'troco': 0
	};

    $scope.total = (($scope.pedido.qtd_20l * $scope.preco.t_20l) + ($scope.pedido.qtd_5l * $scope.preco.t_5l));

    $scope.showAlert = function(titulo, erroMsg) {
    var alertPopup = $ionicPopup.alert({
      title: titulo,
      template: erroMsg
    });
    alertPopup.then(function(res) {
      console.log('Err');
    });
  };

  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...',
      duration: 3000
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };

  var validate = function(){
	  if($scope.pedido.qtd_5l == '0' && $scope.pedido.qtd_20l == '0'){
		  	var erroMsg = "Escolha o tipo da agua desejada!";
			var titulo = "Campos Obrigatórios";
			$scope.showAlert(titulo, erroMsg);
			return false;
	  } else {
		  return true;
	  }
  }


    $scope.confirmarPedido = function(){

        if(validate()){
            $state.go('home.confiPedido');
        }

    }

}]);