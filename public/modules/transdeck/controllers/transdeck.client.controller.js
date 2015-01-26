'use strict';

angular.module('transdeck').controller('TransdeckController', ['$scope', '$http',
	function($scope, $http) {
		// Controller Logic
		// ...
        $scope.start = false;

        var res = function(body) {
            console.log(res);
        };



        $scope.translateText = function() {
            //console.log($scope.userInput.leftText);
            $http.post('/trans', {leftText: $scope.userInput.leftText}).success(
                function(data, status) {
                    console.log('data!', data);
                    console.log('status!', status);
                    $scope.userInput.rightText = data.translatedText;
                });

            console.log($scope.userInput.leftText);
        };
	}
]);