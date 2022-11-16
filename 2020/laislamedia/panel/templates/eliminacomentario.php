<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_comentario = $_GET['em'];
		
$consulta = "SELECT * FROM comentarios WHERE id_comentario = $id_comentario";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
?>
<aside class="eliminar">
	<h2>Eliminar Comentario</h2>
	<p><?php echo $columnas['comentario'] ?></p>
	<p><?php echo $columnas['fecha'] ?></p>
		
	<form action="../templates/eliminarComentario.php" method="post">
		<input type="hidden" name="comentario" value="<?php echo $id_comentario; ?>">

		<input type="submit" value="eliminar">
		<a href="index.php?section=6&edit=3" class="btn3">cancelar</a>
	</form>
</aside>
