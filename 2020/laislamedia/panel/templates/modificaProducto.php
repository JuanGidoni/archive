<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_producto = $_GET['mp'];
		
$consulta = "SELECT * FROM productos WHERE id_producto = $id_producto";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
		
$consulta_marcas = "SELECT id_marca, marca FROM marcas";

$filas_marcas = mysqli_query($cnx, $consulta_marcas);
?>
<aside class="modificar">
	<h2>Modificar Producto</h2>
	<form action="../templates/modificarProducto.php" method="post" enctype="multipart/form-data">
		
		<input type="text" value="<?php echo $columnas['nombre'] ?>" name="nombre">
		<input type="text" value="<?php echo $columnas['presentacion'] ?>" name="presentacion">
		<select name="marca">
			<?php
			while($marcas = mysqli_fetch_assoc($filas_marcas)){
			?>
				<option value="<?php echo $marcas['id_marca']; ?>" <?php if($marcas['id_marca']== $columnas['id_marca']){ echo "selected"; } ?>>
					<?php echo $marcas['marca'] ?>
				</option>
			<?php	
			}
			?>
		</select>
		<input type="text" value="<?php echo $columnas['precio'] ?>" name="precio">
		
		<img src="../productos/<?php echo $columnas['foto']; ?>" alt="foto" class="img-fluid">
		<input type="hidden" name="foto" value="<?php echo $columnas['foto'] ?>">
		<input type="file" name="nueva_foto">
		
		<input type="hidden" name="producto" value="<?php echo $id_producto; ?>">
		
		<input type="submit" value="modificar">
		<a href="index.php?section=6&edit=1" class="btn3">cancelar</a>
	</form>
</aside>
