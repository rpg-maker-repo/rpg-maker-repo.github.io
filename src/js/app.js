angular.module('AssetsApp', [])

.controller('HomeCtrl', function ($http) {
	var vm = this;

	$http.get('https://deusprogrammer.no-ip.org/rmmv-api/v1/plugin')
		.then(function (data) {
			vm.list = data;
		}, function (err) {
			console.error(err);
		});
});
