<?php
require "conexion.php";

$id_marca = $_POST['id_marca'];

$consulta = "DELETE FROM marcas WHERE id_marca=$id_marca";
mysqli_query($cnx, $consulta);

header("Location: ../index.php?section=6&edit=4");
?>