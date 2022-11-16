<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
?>
<section class="panel ml-2">
<div class="navmenu-admin-add">
<a class="nav-link btn btn-primary" href="index.php?section=6&edit=1&ap=1">AGREGAR NUEVO PRODUCTO +</a>
 <br>
<table class="table container-fluid"> 
	<thead>
	<tr>
		<th scope="col">Código</th>
		<th scope="col">Marca</th>
		<th scope="col">Nombre</th>
		<th scope="col">Presentación</th>
		<th scope="col">Precio</th>
		<th scope="col">Foto</th>
		<th scope="col">Acción</th>
	</tr>
	</thead>
	<tbody>
<?php

$consulta = "SELECT * FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca ORDER BY productos.id_producto DESC";

$filas = mysqli_query($cnx, $consulta);
while( $columnas = mysqli_fetch_assoc($filas) ){
?>
	<tr>
		<th scope="row"><?php echo $columnas['id_producto']; ?></th>
		<td><?php echo $columnas['marca']; ?></td>
		<td><?php echo $columnas['nombre']; ?></td>
		<td><?php echo $columnas['presentacion']; ?></td>
		<td>$<?php echo $columnas['precio']; ?></td>
		<td><img src="../productos/<?php echo $columnas['foto']; ?>" alt="<?php echo $columnas['nombre']; ?>" width="60"></td>
		<td><a href="index.php?section=6&edit=1&mp=<?php echo $columnas['id_producto']; ?>">[modificar]</a> <a href="index.php?section=6&edit=1&ep=<?php echo $columnas['id_producto']; ?>">[eliminar]</a></td>
	</tr>
<?php
}
?>
</tbody>
</table>
<br>
		<?php 
        $consulta = "SELECT count(*) as Total FROM productos";
        ?>    
		<p>Total de productos registrados: <?php
            
		$filas = mysqli_query($cnx, $consulta);
		while($columnas = mysqli_fetch_assoc($filas) ){
			
			echo"<strong>".$columnas['Total']."</p>";
		}
               ?>    
        </p>
</section>