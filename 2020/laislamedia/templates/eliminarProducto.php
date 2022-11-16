<?php
require "conexion.php";

$id_producto = $_POST['producto'];
$foto = $_POST['foto'];

$consulta = "DELETE FROM productos WHERE id_producto=$id_producto";
mysqli_query($cnx, $consulta);

if($foto != "generica.jpg"){
    unlink("../productos/$foto");
}

header("Location: ../index.php?section=6&edit=1");
?>