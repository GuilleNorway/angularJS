var app = angular.module('AlumnosApp',[])
	.controller('AlumnosController', function($scope){

		$scope.formVisibility = false;
		
		$scope.alumnos = [
			{
				nombre: "Juan Blanco",
				telefono: "123456",
				curso: "2 ESO" 
			},
			{
				nombre: "Rosa Herrera",
				telefono: "156784",
				curso: "1 ESO"
			},
			{
				nombre: "Ana Lopez",
				telefono: "555535",
				curso: "1 ESO"
			}
		];

		$scope.Save = function() {
			$scope.alumnos.push(
				{
					nombre: $scope.nuevoAlumno.nombre,
					telefono: $scope.nuevoAlumno.telefono,
					curso: $scope.nuevoAlumno.curso
				}

			);
			$scope.formVisibility = false;
			console.log($scope.formVisibility);
		};

		$scope.ShowForm = function(){
			$scope.formVisibility = true;
			console.log($scope.formVisibility);
		};

});