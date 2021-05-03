(function()
{
    'use strict';

    angular.module('myfirstapp',[])
    .controller('myfirstcontroller',function($scope){
        $scope.name="tom";
        $scope.sayhello=function(){
            return"helo tom";

        };


    });
}
)();