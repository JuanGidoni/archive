<?php
require "conexion.php";

$id_eliminado = $_POST['id_eliminado'];

$consulta = "DELETE FROM usuarios WHERE id_usuario = $id_eliminado";
mysqli_query($cnx, $consulta);

header("Location: cerrar.php");

?>