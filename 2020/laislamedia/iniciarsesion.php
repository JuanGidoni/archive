 <?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 3 ){
 ?>       
                <div class="container div-login mt-3" id="login-id">
      <form class="form-signin" id='login-form' action="templates/login.php" method='post'>
        <div class="card">

<h5 class="card-header bg-isla-dark text-white text-center py-4">
	<strong>Iniciar Sesión</strong>
</h5>

<!--Card content-->
<div class="card-body px-lg-5 pt-0">

	<!-- Form -->
	<form class="text-center" style="color: #757575;" action="#!">
		<!-- E-mail -->
		<div class="md-form mt-2">
			<input type="email" id="materialRegisterFormEmail" class="form-control" name="usuario" required placeholder="Email">
		</div>

		<!-- Password -->
		<div class="md-form mt-1">
			<input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" name="clave" required placeholder="Contraseña">
		</div>

		<!-- Sign up button -->
		<button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Entrar</button>

		<!-- Terms of service -->
		
		<p>
  			<label for='form-switch' class="btn-form">No tienes una cuenta? <a href="index.php?r=1">Crear nueva cuenta.</a></label>
		</p>

	</form>
	<!-- Form -->

</div>

</div>
      </form>
    </div>  

<?php
}
else{
    echo 'Ya estas en una sesión, <a href="index.php">volver</a>';
}
 ?> 