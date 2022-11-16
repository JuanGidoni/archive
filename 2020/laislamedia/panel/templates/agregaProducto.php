<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

// consulta de marcas para armar el select
$consulta_marcas = "SELECT id_marca, marca FROM marcas";

$filas_marcas = mysqli_query($cnx, $consulta_marcas);
?>
<aside class="add-new">
<div class="add-new-box">
	<h2>Nuevo Producto</h2>
	<form action="../templates/agregarProducto.php" method="post" enctype="multipart/form-data">
		
		<input type="text" placeholder="Nombre..." name="nombre">
		<input type="text" placeholder="Presentación..." name="presentacion">
		<select name="id_marca">
		<option value="" disabled selected>Elegir Marca</option>
			<?php
			while($marcas = mysqli_fetch_assoc($filas_marcas)){
			?>
				<option value="<?php echo $marcas['id_marca']; ?>">
					<?php echo $marcas['marca'] ?>
				</option>
			<?php	
			}
			?>
		</select>
		<input type="text" placeholder="Precio..." name="precio">
		<input type="file" name="foto">
		
		<input type="submit" value="agregar" class="btn-add">
		<input type="button"value="cancelar" class="btn-add" 
        onclick="window.location='../index.php?section=6&edit=1';">
	</form>
	</div>
</aside>

