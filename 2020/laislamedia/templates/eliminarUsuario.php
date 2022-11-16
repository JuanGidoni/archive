<?php
require "conexion.php";

$id_usuario = $_POST['usuario'];

$consulta = "DELETE FROM usuarios WHERE id_usuario=$id_usuario";
mysqli_query($cnx, $consulta);

header("Location: ../panel/panel.php?edit=2");
?>