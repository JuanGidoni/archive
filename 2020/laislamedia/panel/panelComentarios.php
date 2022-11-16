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
		<th scope="col">Código</th>
		<th scope="col">Usuario</th>
		<th scope="col">Producto</th>
		<th scope="col">Comentario</th>
		<th scope="col">Fecha</th>
		<th scope="col">Acción</th>
	</tr>
	</thead>
	<tbody>
<?php
$consulta = "SELECT * FROM comentarios INNER JOIN usuarios ON comentarios.id_usuario = usuarios.id_usuario";

$filas = mysqli_query($cnx, $consulta);
while( $columnas = mysqli_fetch_assoc($filas) ){
?>
	<tr>
		<th scope="row"><?php echo $columnas['id_comentario']; ?></th>
		<td><?php echo $columnas['id_usuario']; ?></td>
		<td><?php echo $columnas['id_producto']; ?></td>
		<td><?php echo $columnas['comentario']; ?></td>
		<td><?php echo $columnas['fecha']; ?></td>
		<td> <a href="index.php?section=6&edit=3&em=<?php echo $columnas['id_comentario']; ?>">[eliminar]</a></td>
	</tr>
<?php
}
?>
</tbody>
</table>
    <br>
		<?php 
        $consulta = "SELECT count(*) as Total FROM comentarios";
        ?>    
		<p>Total de comentarios registrados: <?php
            
		$filas = mysqli_query($cnx, $consulta);
		while($columnas = mysqli_fetch_assoc($filas) ){
			
			echo"<strong>".$columnas['Total']."</p>";
		}
               ?>    
        </p>
</section>