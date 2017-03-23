//CREAR UN NUEVO MODULO O APLICACION 
//Array [] es para definir los modulos de los que dependamos, como no usaremos ningun modulo se ponen corchetes vacios
var todoApp = angular.module("todoApp",[]);

//CREAR, DEFINE O REGISTRA UN CONTROLADOR NUEVO con el nombre TaskList y llama a la funcion taskList para que se ejecute
todoApp.controller('TaskList',taskList);


//$scope es la variable(OBJETO, puede tener metodos o propiedades) que almacena toda la info del controlador (modelo)
function taskList($scope) 
{
    $scope.tasks = [
        {
            tarea:"tarea 1",
            isDone:false,
            description:"Esta es una tarea de prueba",
            tiempo:"30min"
        },
        {
            tarea:"tarea 2",
            isDone:false,
            description:"Esta es la segunda tarea",
            tiempo:"10min"
        }
    ];
    
    $scope.addTask = function() 
    {
        $scope.tasks.push({
            tarea:"tarea 3",
            isDone:false,
            description:"Esta es la tercera tarea",
            tiempo:"23min"
        });
    };
}