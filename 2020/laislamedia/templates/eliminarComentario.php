<?php
require "conexion.php";

$id_comentario = $_POST['comentario'];

$consulta = "DELETE FROM comentarios WHERE id_comentario=$id_comentario";
mysqli_query($cnx, $consulta);

header("Location: ../panel/panel.php?edit=3");
?>