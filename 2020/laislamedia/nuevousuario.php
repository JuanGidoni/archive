<form action="templates/registrar.php" method='post' id="registro">
		<div class="card mb-3 mt-3">

<h5 class="card-header bg-isla-dark text-white text-center py-4">
        <button type="button" class="close" onclick="window.location.href='index.php'">
          <span aria-hidden="true">&times;</span>
        </button>
	<strong>Crear cuenta</strong>
</h5>

<!--Card content-->
<div class="card-body px-lg-5 pt-0">

	<!-- Form -->
	<form class="text-center" style="color: #757575;" action="#!">

		<div class="form-row mt-2">
			<div class="col">
				<!-- First name -->
				<div class="md-form">
					<input type="text" id="materialRegisterFormFirstName" class="form-control" name="nombre" required placeholder="Nombre">
				</div>
			</div>
			<div class="col">
				<!-- Last name -->
				<div class="md-form">
					<input type="text" id="materialRegisterFormLastName" class="form-control" name="apellido" required placeholder="Apellido">
				</div>
			</div>
		</div>

		<!-- E-mail -->
		<div class="md-form mt-1">
			<input type="email" id="materialRegisterFormEmail" class="form-control" name="mail" required placeholder="Email">
		</div>

		<!-- Password -->
		<div class="md-form mt-1">
			<input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" name="clave" required placeholder="Contraseña">
			<small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
				Debe ser al menos 4 caracteres
			</small>
		</div>

		<!-- Phone number -->
		<div class="md-form">	<select name="localidad" required class="h-100">
						<?php
						$consulta="SELECT * FROM localidades";
						$filas = mysqli_query($cnx, $consulta);
						while($columnas = mysqli_fetch_assoc($filas)){
						?>
						<option value="<?php echo $columnas['id_localidad']?>"><?php echo $columnas['localidad']?></option>
						<?php
						}
						?>
					</select>
			<small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
				Selecciona tu localidad
			</small>
		</div>

		<!-- Sign up button -->
		<button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Crear</button>

		<!-- Terms of service -->
		
		<label for="checkbox">Al crear una cuenta usted es consciente y acepta los siguientes documentos: <a href="#">T.O.S</a>,<a href="#">A.D.U</a> & <a href="#">Privacy Police</a>.</label>
		<p class="text-center mt-2">
  			<label for='form-switch' class="btn-form">Ya tienes cuenta? <i class="fa fa-arrow-down"></i></label>
		</p>

	<!-- Form -->

</div>

</div>
<!-- Material form register -->

</form>