<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
?>
	<section class="panel ml-2">
<div class="navmenu-admin-add">
<a class="nav-link btn btn-primary" href="index.php?section=6&edit=4&amcc=1">AGREGAR NUEVA MARCA +</a>
 <br>
<table class="table container-fluid"> 
	<thead>
	<tr>
		<th scope="col">Código</th>
		<th scope="col">Nombre</th>
		<th scope="col">Acción</th>
	</tr>
	</thead>
	<tbody>
<?php
$consulta = "SELECT * FROM marcas";

$filas = mysqli_query($cnx, $consulta);
while( $columnas = mysqli_fetch_assoc($filas) ){
?>
	<tr>
		<th scope="row"><?php echo $columnas['id_marca']; ?></th>
		<td><?php echo $columnas['marca']; ?></td>
		<td><a href="index.php?section=6&edit=4&mmmc=<?php echo $columnas['id_marca']; ?>">[modificar]</a> <a href="index.php?section=6&edit=4&emmc=<?php echo $columnas['id_marca']; ?>">[eliminar]</a></td>
	</tr>
<?php
}
?>
</tbody>
</table>

    <br>
		<?php 
        $consulta = "SELECT count(*) as Total FROM marcas";
        ?>    
		<p>Total de marcas registradas: <?php
            
		$filas = mysqli_query($cnx, $consulta);
		while($columnas = mysqli_fetch_assoc($filas) ){
			
			echo"<strong>".$columnas['Total']."</p>";
		}
               ?>    
        </p>
</section>