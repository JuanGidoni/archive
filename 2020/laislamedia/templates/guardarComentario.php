<?php
require "conexion.php";

$usuario = $_POST['usuario'];
$producto = $_POST['producto'];
$comentario = $_POST['comentario'];
$fecha = date('Y-m-d');  

$consulta="INSERT INTO comentarios (id_usuario, id_producto, comentario, fecha) VALUES ($usuario, $producto, '$comentario', '$fecha')";

mysqli_query($cnx, $consulta);

header("Location: ../index.php?show=$producto#comentarios");
mysqli_close($cnx);
?>