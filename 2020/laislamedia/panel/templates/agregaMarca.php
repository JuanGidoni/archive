<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";
?>
<aside class="add-new">
<div class="add-new-box">
	<h2>Nueva Marca</h2>
	<form action="../templates/agregarMarca.php" method="post" enctype="multipart/form-data">
		
		<input type="text" placeholder="Nombre de la marca" name="marca">
		
		<input type="submit" value="agregar" class="btn-add">
		<input type="button"value="cancelar" class="btn-add" 
        onclick="window.location='../index.php?section=6&edit=4';">
	</form>
	</div>
</aside>

