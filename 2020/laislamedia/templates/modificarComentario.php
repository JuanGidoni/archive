<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_comentario = $_GET['mc'];
		
$consulta = "SELECT * FROM comentarios WHERE id_comentario = $id_comentario";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
		
$consulta_marcas = "SELECT id_comentario, comentario FROM comentarios";

$filas_marcas = mysqli_query($cnx, $consulta_marcas);
?>
<aside class="modificar">
	<h2>Modificar Comentario</h2>
	<form action="../templates/modificarComentario.php" method="post" enctype="multipart/form-data">
		
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
		
		<img src="../productos/<?php echo $columnas['foto']; ?>" alt="foto">
		<input type="hidden" name="foto" value="<?php echo $columnas['foto'] ?>">
		<input type="file" name="nueva_foto">
		
		<input type="hidden" name="producto" value="<?php echo $id_producto; ?>">
		
		<input type="submit" value="modificar">
		<a href="panel.php?edit=1" class="btn3">cancelar</a>
	</form>
</aside>
