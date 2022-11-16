<?php
require "conexion.php";

$id_usuario = $_POST['id_usuario'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$id_localidad = $_POST['localidad'];
$id_nivel = $_POST['nivel'];

$consulta = "UPDATE usuarios SET nombre='$nombre', apellido='$apellido', id_localidad='$id_localidad', id_nivel='$id_nivel' WHERE id_usuario=$id_usuario";

mysqli_query($cnx, $consulta);

header("Location: ../index.php?section=6&edit=2");
?>












