<?php
require "templates/conexion.php";

?>
		<aside id="errorlog">
			<p>Usuario o clave inexistente</p>
			<a href="#" class="btn2">cerrar</a>
		</aside>
	<main>
		<?php
		if(isset($_GET['r']) && $_GET['r']==1){
			
			include "nuevousuario.php";
			
		}
        
    if( !isset($_GET['show']) ){
		?>
		<p class="text-muted small mb-2 mt-2 text-left">Todos los productos</p>
  <div class="row">
			<?php
			$consulta = "SELECT * FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca ORDER BY productos.id_producto ASC";
			
			$filas = mysqli_query($cnx, $consulta);
		
			while($columnas = mysqli_fetch_assoc($filas)){
				
			?>
			<div class="col-lg-4 col-md-6 mb-4">
			  <div class="card h-100">
				<a href="index.php?section=1&show=<?php echo $columnas['id_producto']; ?>"><img class="card-img-top img-box" src="productos/<?php echo $columnas['foto']; ?>" alt=""></a>
				<div class="card-body">
				  <h4 class="card-title">
					<a href="index.php?section=1&show=<?php echo $columnas['id_producto']; ?>"><?php echo $columnas['nombre']; ?></a>
				  </h4>
				  <h5>$<?php echo $columnas['precio']; ?></h5>
				  <p class="card-text"><?php echo $columnas['presentacion']; ?></p>
				</div>
				<div class="card-footer">
				  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
				</div>
			  </div>
			</div>

			<?php
			}
			?>
</div class="col-lg-12"><br>
<?php
		}else{
			
			$p = $_GET['show'];
			$consulta = "SELECT * FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE productos.id_producto = $p";
			$fila = mysqli_query($cnx, $consulta);
			$columnas = mysqli_fetch_assoc($fila);
		?>
	 <div class="card mt-4">
		 <div class="text-center">
		  <img class="card-img-top img-fluid img-product" src="productos/<?php echo $columnas['foto']; ?>" alt="">
		</div>
          <div class="card-body">
            <h3 class="card-title"><?php echo $columnas['nombre']; ?></h3>
            <h4>$<?php echo $columnas['precio']; ?></h4>
			<p class="card-text"><?php echo $columnas['presentacion']; ?></p>
			<p class="card-text small">Marca: <?php echo $columnas['marca']; ?></p>
            <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            4.0 stars
		  </div>
		  <div class="col-12 text-right">
		  <a href="index.php?section=1" class="btn mr-auto">Volver</a>
		  </div>
        </div>
				
		<div class="card card-outline-secondary my-4">
          <div class="card-header">
            Comentarios
          </div>
		  <div class="card-body">
		  
		  <?php
		$consulta = "SELECT * FROM comentarios INNER JOIN usuarios ON comentarios.id_usuario = usuarios.id_usuario WHERE comentarios.id_producto = $p ORDER BY comentarios.id_comentario DESC";
		
		$filas = mysqli_query($cnx, $consulta);
		while($columnas = mysqli_fetch_assoc($filas) ){
			?>
            <p><?php echo $columnas['comentario'];?></p>
            <small class="text-muted">Publicado por: <?php echo $columnas['nombre'];?> el <?php echo $columnas['fecha'];?></small>
            <hr>
			<?php
		}
		if(isset($_SESSION['id_usuario'])){
			?>	
		
		<form action="templates/guardarComentario.php" method="post">
		<input type="text" name="comentario" placeholder="Ingresá un comentario...">
		<input type="hidden" name="usuario" value="<?php echo $_SESSION['id_usuario']?>">
		<input type="hidden" name="producto" value="<?php echo $p;?>">
		<input type="submit" value="Comentar" class="btn2">
	</form>
	
	<?php		
		}
		?>
			</div>
		  </div>
	</div>
		
		<?php
		}
		?>