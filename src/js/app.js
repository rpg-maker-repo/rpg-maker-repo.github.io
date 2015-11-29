angular.module('AssetsApp', [])

.controller('HomeCtrl', function ($http) {
	var vm = this;

	//$http.get('https://deusprogrammer.no-ip.org/rmmv-api/v1/plugin')
	$http({method: 'GET', url: 'https://deusprogrammer.no-ip.org/rmmv-api/v1/plugin', 
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit':'123123123'
            }})
		.then(function (data) {
			vm.list = data;
		}, function (err) {
			console.error(err);
		});
});
