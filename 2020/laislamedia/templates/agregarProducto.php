<?php
require "conexion.php";

$nombre = $_POST['nombre'];
$presentacion = $_POST['presentacion'];
$id_marca = $_POST['id_marca'];
$precio = $_POST['precio'];

$consulta_alta = "INSERT INTO productos (nombre, presentacion, id_marca, precio) VALUES ('$nombre', '$presentacion', $id_marca, $precio) ";

mysqli_query($cnx, $consulta_alta);
$id_producto = mysqli_insert_id($cnx);
if( !empty($_FILES['foto']['tmp_name'])){
	$foto = $id_producto . ".jpg";
	move_uploaded_file($_FILES['foto']['tmp_name'], "../productos/" .$foto);
    
}else{
    $foto = "generica.jpg";
}
mysqli_query($cnx, "UPDATE productos SET foto='$foto' WHERE id_producto=$id_producto");

header("Location: ../index.php?section=6&edit=1");
?>