<?php
if( isset($_SESSION['id_nivel']) && $_SESSION['id_nivel'] == 2 && $_SESSION['id_nivel'] == 1){
    echo 'Porfavor <a href="index.php?section=5">Inicia sesión</a>';
    }
else{ 
require "templates/conexion.php";
if( isset($_SESSION['nombre']) ){
?>
<p class="text-muted small mt-3 mb-0">Bienvenido <?php echo $_SESSION['nombre']." ".$_SESSION['apellido']?>
		<?php
		 }
		?>
		<hr class="mt-0">
		<div class="container">
		<h2 class="text-center">Modificá tus datos</h2>	
					
					<?php
		$id_usuario = $_SESSION['id_usuario'];
		$consulta_modifica = "SELECT * FROM usuarios WHERE id_usuario = $id_usuario";
		$usuario = mysqli_query($cnx, $consulta_modifica);
		$datos = mysqli_fetch_assoc($usuario);
		
		$consulta="SELECT * FROM localidades";
		$filas = mysqli_query($cnx, $consulta);
		?>
			<form action="templates/modificarPerfil.php" method="post">
			<div class="row">
				<div class="card pt-3 container-fluid">
				<div class="row text-center">
		<div class="col-6">
				<div>
					<label class="small text-muted">Nombre de Usuario</label>
					<input type="text" value="<?php echo $datos['usuario'] ?>" disabled class="w-100">
					<input type="hidden" name="id_usuario" value="<?php echo $id_usuario; ?>">
				</div>
				<div>
					<label class="small mt-2 text-muted">Contraseña</label>
				<input type="text" name="clave" value="<?php echo $datos['clave'] ?>" class="w-100">
				</div>
		</div>	
		<div class="col-6">
			<div>
				<label class="small text-muted">Nombre</label>
				<input type="text" name="nombre" value="<?php echo $datos['nombre'] ?>" class="w-100">
			</div>
			<div>
				<label class="small mt-2 text-muted">Apellido</label>
				<input type="text" name="apellido" value="<?php echo $datos['apellido'] ?>" class="w-100">
			</div>
		</div>
		<div class="col-12 mt-3 text-center">
			<div>
				<label>¿De donde eres?</label>
				<select name="id_localidad">
					<?php
					while($columnas = mysqli_fetch_assoc($filas)){
						?>
					<option value="<?php echo $columnas['id_localidad'];?>" <?php if($datos['id_localidad'] == $columnas['id_localidad']){ echo "selected"; }?>>
					
					<?php echo $columnas['localidad']?>
					
				</option>
				<?php
					}
					?>
				</select>
			</div>
			<div class="col-12 text-center mt-3 mb-3">
			<input type="submit" value ="Actualizar" class="btn bg-isla text-white">
			<a href="index.php?setion=2" class="btn bg-dark text-white">Volver</a>
			</div>
		</div>

		</div>
		</div>
		</div>
			<p><a class="text-danger" href="index.php?section=2#elim"><i class="fa fa-trash"></i> eliminar mi cuenta</a></p>
	</form>
</div>

<aside id="elim" class="bg-danger mx-auto">
	<h2>¿Realmente querés eliminar la cuenta?</h2>
	<form action="templates/eliminarPerfil.php" method="post">
	
	<input type="hidden" name="id_eliminado" value="<?php echo $_SESSION['id_usuario']; ?>">
	<input type="submit" value="Si" class="btn bg-isla text-white">
	<a href="index.php?section=2" class="btn bg-dark text-white">No</a>
	</form>
</aside>

<?php
    }
 ?>   