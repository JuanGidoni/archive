<?php
require "conexion.php";

$id_usuario = $_POST['id_usuario'];
$clave = $_POST['clave'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$id_localidad = $_POST['id_localidad'];

$consulta = "UPDATE usuarios SET clave='$clave', nombre='$nombre', apellido='$apellido', id_localidad='$id_localidad' WHERE id_usuario=$id_usuario";

mysqli_query($cnx, $consulta);

header("Location: ../index.php?section=2");

?>