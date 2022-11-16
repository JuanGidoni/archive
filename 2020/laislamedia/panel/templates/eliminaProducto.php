<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_producto = $_GET['ep'];
		
$consulta = "SELECT * FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE id_producto = $id_producto";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
?>
<aside class="eliminar">
	<h2>Eliminar Producto</h2>
		
	<p><?php echo $columnas['nombre'] ?></p>
	<p><?php echo $columnas['presentacion'] ?></p>
	<p><?php echo $columnas['marca'] ?></p>
	<p>$<?php echo $columnas['precio'] ?></p>
	
	<div><img src="../productos/<?php echo $columnas['foto']; ?>" alt="foto"></div>
		
	<form action="../templates/eliminarProducto.php" method="post">
		<input type="hidden" name="producto" value="<?php echo $id_producto; ?>">
		<input type="hidden" name="foto" value="<?php echo $columnas['foto']; ?>">

		<input type="submit" value="eliminar">
		<a href="index.php?section=6&edit=1" class="btn3">cancelar</a>
	</form>
</aside>
