<?php
require "conexion.php";

if($_POST['producto']){
	$id_producto = $_POST['producto'];
	}
else{
	header("Location:  ../index.php?section=6&edit=1&ac=1#reg");
}
if($_POST['marca']){
	$id_marca = $_POST['marca'];
	}
else{
	header("Location:  ../index.php?section=6&edit=1&ac=1#reg");
}
if($_POST['nombre']){
	$nombre = $_POST['nombre'];
	}
else{
	header("Location:  ../index.php?section=6&edit=1&ac=1#reg");
}
if($_POST['presentacion']){
	$presentacion = $_POST['presentacion'];
	}
else{
	header("Location:  ../index.php?section=6&edit=1&ac=1#reg");
}
if($_POST['precio']){
	$precio = $_POST['precio'];
	}
else{
	header("Location:  ../index.php?section=6&edit=1&ac=1#reg");
}
if($_POST['foto']){
	$foto = $_POST['foto'];
if( !empty($_FILES['nueva_foto']['tmp_name'])){
		
	move_uploaded_file($_FILES['nueva_foto']['tmp_name'], "../productos/" .$foto);
}
	}
else{
	header("Location:  ../index.php?section=6&edit=1&ac=1#reg");
}


$consulta = "UPDATE productos SET id_marca=$id_marca, nombre='$nombre', presentacion='$presentacion', precio='$precio', foto='$foto' WHERE id_producto=$id_producto";

if($consulta){	
	mysqli_query($cnx, $consulta);
	
	header("Location:  ../index.php?section=6&edit=1&ac=2#reg");
}
else{
	header("Location:  ../index.php?section=6&edit=1&ac=1#reg");
}

?>












