<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
require "conexion.php";

$id_usuario = $_GET['mu'];
		
$consulta = "SELECT * FROM usuarios WHERE id_usuario = $id_usuario";
		
$filas = mysqli_query($cnx, $consulta);
		
$columnas = mysqli_fetch_assoc($filas);
		
$consulta_localidades = "SELECT * FROM localidades";

$filas_localidades = mysqli_query($cnx, $consulta_localidades);

$consulta_niveles = "SELECT * FROM niveles";

$filas_niveles = mysqli_query($cnx, $consulta_niveles);
?>
<aside class="modificar">
	<h2>Modificar Usuario</h2>
	<form action="../templates/modificarUsuario.php" method="post">
		
		<input type="text" value="<?php echo $columnas['usuario'] ?>" name="usuario" disabled>
		
		<input type="text" value="<?php echo $columnas['nombre'] ?>" name="nombre">
		<input type="text" value="<?php echo $columnas['apellido'] ?>" name="apellido">
		<select name="localidad">
			<?php
			while($localidades = mysqli_fetch_assoc($filas_localidades)){
			?>
				<option value="<?php echo $localidades['id_localidad']; ?>" <?php if($localidades['id_localidad']== $columnas['id_localidad']){ echo "selected"; } ?>>
					<?php echo $localidades['localidad'] ?>
				</option>
			<?php	
			}
			?>
		</select>

		<select name="nivel">
			<?php
			while($niveles = mysqli_fetch_assoc($filas_niveles)){
			?>
				<option value="<?php echo $niveles['id_nivel']; ?>" <?php if($niveles['id_nivel']== $columnas['id_nivel']){ echo "selected"; } ?>>
					<?php echo $niveles['nivel'] ?>
				</option>
			<?php	
			}
			?>
		</select>
		
		<input type="hidden" name="id_usuario" value="<?php echo $id_usuario; ?>">

		<input type="submit" value="modificar">
		<a href="index.php?section=6&edit=2" class="btn3">cancelar</a>
	</form>
</aside>
