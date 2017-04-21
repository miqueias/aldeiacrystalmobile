angular.module('app.controllers')
.controller('LoginController', ['$scope','$state','$http','$ionicPopup', '$ionicLoading',
	function($scope,$state,$http,$ionicPopup,$ionicLoading)  {
	// body...
	$scope.user = {
		cod_condominio: '',
		apt: ''
	};

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
	  if($scope.user.cod_condominio == '' || $scope.user.apt == ''){
		  	var erroMsg = "Digite o código do condominio e o número do apartamento!";
			var titulo = "Campos Obrigatórios";
			$scope.showAlert(titulo, erroMsg);
			return false;
	  } else {
		  return true;
	  }
  }

  
//$scope.showAlert(titulo, erroMsg);

	$scope.login = function() {
		if(validate()) {

			//mock
			if($scope.user.cod_condominio == '1' && $scope.user.apt == '1'){
				$state.go('home.pedido');
			} else {
		$scope.show();
		console.log(validate());
		var req = {
			method: 'POST',
			url: 'http://localhost/AldeiaCrystalWebAdmin/production/api/login',
			headers: {
			'Content-Type': 'application/json'
			},
			replacement: "http://localhost:8100",
			data: $scope.user
			}

			$http(req).then(function(res){
				console.log('success', res);
				$state.go('home.pedido');
				$scope.hide();
				}, function(err){
					console.log('error',err);
					var erroMsg = "Os dados informados estão incorretos! Favor verifique os dados informados e tente novamente";
					var titulo = "Dados não cadastrados";
					$scope.showAlert(titulo, erroMsg);
					$scope.hide();
					});
	}
		}
	};

}]);