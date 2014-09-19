'use strict';

angular.module('pointBuyApp')
    .controller('MainCtrl', function ($scope) {

        $scope.totalCost = 0;
        $scope.budget = 27;

        var costs = {
            3: -4,
            4: -3,
            5: -3,
            6: -2,
            7: -1,
            8: 0,
            9: 1,
            10: 2,
            11: 3,
            12: 4,
            13: 5,
            14: 7,
            15: 9,
            16: 11,
            17: 13,
            18: 15
        };

        $scope.budgetReached = false;

        var stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

        stats.forEach(function(stat) {
            $scope.$watch(stat, function (newScore, oldScore) {
                var newScoreCost = costs[newScore];
                var oldScoreCost = costs[oldScore];
                $scope.totalCost = $scope.totalCost + newScoreCost - oldScoreCost;
                $scope.budgetReached = $scope.totalCost > $scope.budget;
            });
        });
    });
