// function PhoneListCtrl($scope, $http) {

//     $http.get('app/data.php').success(function(data) {
//         $scope.phones = data;
//     });
//     $scope.orderProp = 'age'; //过滤排序

// }

// var PhoneListCtrl = ['$scope', '$http',
//     function($scope, $http) {
//         $http.get('app/data.php').success(function(data) {
//             $scope.phones = data.splice(0, 5); //显示5条
//         });
//         $scope.orderProp = 'age'; //过滤排序
//     }
// ];

routeApp.controller('listCtl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('app/list.php').success(function(data) {
            $scope.phones = data; //显示5条
        });
        $scope.orderProp = 'age'; //过滤排序
    }
]);

routeApp.controller('infoCtl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('app/info.php?id='+ $routeParams.id)
            .success(function(data) {
                $scope.info = data; //显示5条
            }).error(function(data) {
                //断网，超时
                console.log(data)
            });        
    }
]);

