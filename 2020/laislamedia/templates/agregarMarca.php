<?php
require "conexion.php";

$marca = $_POST['marca'];

$consulta_alta = "INSERT INTO marcas (marca) VALUES ('$marca') ";   
mysqli_query($cnx, $consulta_alta);
$id_marca = mysqli_insert_id($cnx);
header("Location: ../index.php?section=6&edit=4");
?>