<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
?>
<section class="panel ml-2">
<div class="navmenu-admin-add">
<table class="table container-fluid"> 
	<thead>
	<tr>
		<th scope="col">ID</th>
		<th scope="col">Usuario</th>
		<th scope="col">Nombre</th>
		<th scope="col">Apellido</th>
		<th scope="col">Localidad</th>
		<th scope="col">Permiso</th>
		<th scope="col">Acción</th>
	</tr>
	</thead>
	<tbody>
<?php
$consulta = "SELECT * FROM usuarios INNER JOIN localidades ON usuarios.id_localidad = localidades.id_localidad INNER JOIN niveles ON usuarios.id_nivel = niveles.id_nivel";

$filas = mysqli_query($cnx, $consulta);
while( $columnas = mysqli_fetch_assoc($filas) ){
?>
	<tr>
		<th scope="row"><?php echo $columnas['id_usuario']; ?></th>
		<td><?php echo $columnas['usuario']; ?></td>
		<td><?php echo $columnas['nombre']; ?></td>
		<td><?php echo $columnas['apellido']; ?></td>
		<td><?php echo $columnas['localidad']; ?></td>
		<td><?php echo $columnas['nivel']; ?></td>
		<td><a href="index.php?section=6&edit=2&mu=<?php echo $columnas['id_usuario']; ?>">[modificar]</a> <a href="index.php?section=6&edit=2&eu=<?php echo $columnas['id_usuario']; ?>">[eliminar]</a></td>
	</tr>
<?php
}
?>
</tbody>
</table>

    <br>
		<?php 
        $consulta = "SELECT count(*) as Total FROM usuarios";
        ?>    
		<p>Total de usuarios registrados: <?php
            
		$filas = mysqli_query($cnx, $consulta);
		while($columnas = mysqli_fetch_assoc($filas) ){
			
			echo"<strong>".$columnas['Total']."</p>";
		}
               ?>    
        </p>
</section>