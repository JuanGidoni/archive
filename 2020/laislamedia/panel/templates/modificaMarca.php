<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_marca = $_GET['mmmc'];
		
$consulta = "SELECT * FROM marcas WHERE id_marca = $id_marca";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
?>
<aside class="modificar">
	<h2>Modificar Marca</h2>
	<form action="../templates/modificarMarca.php" method="post" enctype="multipart/form-data">
		<label>Marca: </label>
		<input type="text" value="<?php echo $columnas['marca'] ?>" name="marca">
		<input type="hidden" name="id_marca" value="<?php echo $id_marca; ?>">
		
		<input type="submit" value="modificar">
		<a href="index.php?section=6&edit=4" class="btn3">cancelar</a>
	</form>
</aside>
