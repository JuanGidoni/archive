<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_marca = $_GET['emmc'];
		
$consulta = "SELECT * FROM marcas WHERE id_marca = $id_marca";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
?>
<aside class="eliminar">
	<h2>Eliminar Marca</h2>
		
	<p><?php echo $columnas['id_marca'] ?></p>
	<p><?php echo $columnas['marca'] ?></p>
		
	<form action="../templates/eliminarMarca.php" method="post">
		<input type="hidden" name="id_marca" value="<?php echo $id_marca; ?>">
		<input type="hidden" name="marca" value="<?php echo $columnas['marca']; ?>">

		<input type="submit" value="eliminar">
		<a href="../index.php?section=6&edit=4" class="btn3">cancelar</a>
	</form>
</aside>
