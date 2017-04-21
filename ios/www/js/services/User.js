angular.module('app.services',['ngResource'])
.service('User', ['$resource','appConfig', function($resource,appConfig){

	return $resource(appConfig.baseUrl + '/login',{}, {
			authenticated: {
				url: appConfig.baseUrl + '/login',
                method: 'POST'
                    }
                    
            });
}]);