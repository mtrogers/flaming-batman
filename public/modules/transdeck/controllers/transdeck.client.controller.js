'use strict';

angular.module('transdeck').controller('TransdeckController', ['$scope', '$http', '$translate',
	function($scope, $http, $translate) {
		// Controller Logic
		// ...
        $scope.user1 = {
            'focus': true,
            'init': true,
            'locale': 'en'
        };
        $scope.user2 = {
            'focus': false,
            'init': false,
            'locale': 'en'
        };
        //$scope.user1Init = true;
        //$scope.user2Init = false;
        //$scope.user1 = false;
        //$scope.user2 = false;
        $scope.hasInput = false;

        $scope.text1 = [];
        $scope.text2 = [];

        $scope.transText1 = [];
        $scope.transText2 = [];

        $scope.messages = [];

        //var res = function(body) {
        //    console.log(res);
        //};

        $scope.start = function() {
            $scope.begin = false;
            $scope.user2Init = true;

        };

        $scope.testPanel = function(user) {
            console.log($scope.user1);
            if (user === 'user1') {
                $scope.messages.push({user1: true, trans: false, text: $scope.userInput.text1, side: 'text-left'} );
                //$scope.transText1.push({user1: true, trans: true, text: data.translatedText});
                $translate.use($scope.user2.locale);

            } else {
                $scope.messages.push({user1: false, trans: false, text: $scope.userInput.text2, side: 'text-right'});
                //$scope.transText1.push({user1: false, trans: true, text: data.translatedText});

            }
            $scope.user1.focus = !$scope.user1.focus;
            $scope.user2.focus = !$scope.user2.focus;
            $scope.hasInput = true;
        };

        $scope.translateText = function() {
            //console.log($scope.userInput.leftText);
            console.log('USERS: ', $scope.user1, $scope.user2);
            if ($scope.user1.focus) {
                $http.post('/trans', {text: $scope.userInput.text1, language: $scope.user2.locale}).success(
                    function (data, status) {
                        console.log('data!', data);
                        console.log('status!', status);

                        $scope.messages.push({user1: true, text: $scope.userInput.text1, transText: data.translatedText, side: 'text-left'});
                        //$scope.transText1.push({user1: true, trans: true, text: data.translatedText});
                        $translate.use($scope.user2.locale);

                    }
                );
            } else {
                $http.post('/trans', {text: $scope.userInput.text2, language: $scope.user1.locale}).success(
                    function(data, status) {
                        console.log('data!', data);
                        console.log('status!', status);

                        //$scope.messages.push({user1: false, trans: false, text: $scope.userInput.text2} );
                        $scope.messages.push({user1: false, text: $scope.userInput.text2, transText: data.translatedText, side: 'text-right'});
                        //$scope.transText1.push({user1: false, trans: true, text: data.translatedText});
                        $translate.use($scope.user1.locale);


                    }
                );
            }
            $scope.user1.focus = !$scope.user1.focus;
            $scope.user2.focus = !$scope.user2.focus;
            $scope.hasInput = true;
            /*
            $http.post('/trans', {text: $scope.userInput.text1}).success(
                function(data, status) {
                    console.log('data!', data);
                    console.log('status!', status);
                    if (user === 'user1') {
                        $scope.messages.push({user1: true, trans: false, text: $scope.userInput.text1} );
                        $scope.transText1.push({user1: true, trans: true, text: data.translatedText});

                    } else {
                        $scope.messages.push({user1: false, trans: false, text: $scope.userInput.text2} );
                        $scope.transText1.push({user1: false, trans: true, text: data.translatedText});

                    }

                });
            */
            //console.log($scope.userInput.leftText);
        };

        $scope.setLocale = function(local) {

            //todo: fix this
            $translate.use(local);
            //$translate.refresh();
            if ($scope.user1.focus) {
                $scope.user1.locale = local;

            } else {
                $scope.user2.locale = local;
            }
            console.log($scope.user1, $scope.user2);

        };

        $scope.changeLocal = function(local) {
            $translate.use(local);
        };
	}
]);