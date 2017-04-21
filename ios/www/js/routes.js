angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('home.perfil', {
    url: '/perfil',
    views: {
      'tab1': {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilController'
      }
    }
  })

  .state('home.pedido', {
    url: '/pedido',
    views: {
      'tab2': {
        templateUrl: 'templates/pedido.html',
        controller: 'PedidoController'
      }
    }
  })

  .state('home.confiPedido', {
    url: '/confiPedido',
    views: {
      'tab2': {
        templateUrl: 'templates/confiPedido.html',
        controller: 'confiPedidoCtrl'
      }
    }
  })

  .state('home.historico', {
    url: '/historico',
    views: {
      'tab3': {
        templateUrl: 'templates/historico.html',
        controller: 'historicoCtrl'
      }
    }
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('noticias', {
    url: '/noticias',
    templateUrl: 'templates/noticias.html',
    controller: 'noticiasCtrl',
    data: {
        requiresLogin: true
      }
  })

$urlRouterProvider.otherwise('/login')

  

});