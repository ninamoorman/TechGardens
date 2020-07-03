// scope as a data passer
// controller can set the data in scope
app.controller('MainController', ['$scope', function($scope) {
    $scope.list = ["entry 1", "entry 2", "entry 3"];
    $scope.addItem = function(){
        $scope.list.push($scope.addToDo);
    }
}])