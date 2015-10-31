
var shop = angular.module('shop', []);

shop.controller('products', ['$scope','$http', function($scope, $http) {

	var url ='/site/products-list';
	$http.get(url).success(function(data){
		$scope.products = data;
	});

}]);
