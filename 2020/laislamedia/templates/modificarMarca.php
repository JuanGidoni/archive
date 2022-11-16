<?php
require "conexion.php";

$id_marca = $_POST['id_marca'];
$marca = $_POST['marca'];

$consulta = "UPDATE marcas SET id_marca=$id_marca, marca='$marca' WHERE id_marca=$id_marca";

mysqli_query($cnx, $consulta);

header("Location:  ../index.php?section=6&edit=4");
?>

