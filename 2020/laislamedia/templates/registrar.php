<?php
require "conexion.php";

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$clave = $_POST['clave'];
$usuario = $_POST['mail'];
$id_localidad = $_POST['localidad'];

$consulta="SELECT * FROM usuarios WHERE usuario = '$usuario'";
$filas = mysqli_query($cnx, $consulta);
$columnas = mysqli_fetch_assoc($filas);

if($columnas != false){
	header("Location: ../index.php?r=1&e=1#reg");
	exit;
}
$consulta_alta = "INSERT INTO usuarios (usuario, clave, nombre, apellido, id_localidad, id_nivel ) VALUES ('$usuario', '$clave', '$nombre', '$apellido', $id_localidad, 2) ";

mysqli_query($cnx, $consulta_alta);

header("Location: ../index.php?e=2#reg");
?>