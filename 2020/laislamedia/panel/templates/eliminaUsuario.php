<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_usuario = $_GET['eu'];
		
$consulta = "SELECT * FROM usuarios INNER JOIN localidades ON usuarios.id_localidad = localidades.id_localidad INNER JOIN niveles ON usuarios.id_nivel = niveles.id_nivel WHERE id_usuario = $id_usuario";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
?>
<aside class="eliminar">
	<h2>Eliminar Usuario</h2>
		
	<p><?php echo $columnas['usuario'] ?></p>
	<p><?php echo $columnas['nombre'] ?></p>
	<p><?php echo $columnas['apellido'] ?></p>
	<p><?php echo $columnas['localidad'] ?></p>
	<p><?php echo $columnas['nivel'] ?></p>
		
	<form action="../templates/eliminarUsuario.php" method="post">
		<input type="hidden" name="usuario" value="<?php echo $id_usuario; ?>">
		<input type="submit" value="eliminar">
		<a href="index.php?section=6&edit=2" class="btn3">cancelar</a>
	</form>
</aside>
