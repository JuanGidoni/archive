<?php
require "conexion.php";

$consulta="SELECT * FROM localidades";
$filas = mysqli_query($cnx, $consulta);
?>
<a href="index.php" id="cerrar">X</a>
<h2>Resgistrate!</h2>
<form action="templates/registrar.php" method="post" id="registro">
	<input type="email" placeholder="usuario (tu email)" name="mail" required>
	<input type="password" placeholder="clave" name="clave" required>
	<input type="text" placeholder="tu nombre..." name="nombre" required>
	<input type="text" placeholder="tu apellido..." name="apellido" required>
	<select name="localidad" required>
		<?php
		while($columnas = mysqli_fetch_assoc($filas)){
		?>
		<option value="<?php echo $columnas['id_localidad']?>"><?php echo $columnas['localidad']?></option>
		<?php
		}
		?>
		
	</select>
	<input type="submit" value="enviar">
</form>