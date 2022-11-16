<?php
session_start();
require "templates/conexion.php";

?>

<!doctype html>
<html>
<head>
    <title>La Isla Media - Soluciónes Informáticas</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="templates/css/bootstrap.min.css">
    <link rel="stylesheet" href="templates/css/estilo2.css">
    <link rel="stylesheet" href="templates/fontaw/css/font-awesome.min.css">
</head>
<body>

<header>
<div class="jumbotron background-isla">
</div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-isla">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.php">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php?section=1">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php?section=3">Nosotros</a>
                </li>
            </ul>
            
        <?php 
		if( isset($_SESSION['nombre']) ){
            if($_SESSION['id_nivel'] == 1){
                ?>
          
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.php?section=6"><i class="fa fa-lock" aria-hidden="true"></i> Administración</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php?section=2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar Perfil </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="templates/cerrar.php"><i class="fa fa-sign-out" aria-hidden="true"></i> 
                Cerrar sesión</a>
                </li>
            </ul>
            <?php
            }
            if($_SESSION['id_nivel'] == 2){
                ?>
                
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.php?section=2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar Perfil </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="templates/cerrar.php"><i class="fa fa-sign-out" aria-hidden="true"></i> 
                Cerrar sesión</a>
                </li>
            </ul>

            <?php
            } 
            ?>
    </div>
    </nav>  
    </header>
    <div class="container-fluid bg-light mt-0 pt-0">
      <div class="row">

    <div class="container bg-blanco">

<?php
	if( isset($_GET['section'])){
        switch($_GET['section']){
            case 1:
				include "productos.php";
            break;
			case 2:
				include "perfil.php";
            break;
			case 3:
				include "nosotros.php";
            break;
			case 5:
				include "iniciarsesion.php";
            break;
			case 6:
				include "panel/panel.php";
            break;
		}
	}else {
        include "general.php";
    }
    
    
    if(isset($_GET['pa'])){
        switch($_GET['pa']){
            case 1: 
                echo '<aside id="reg" class="falla card bg-dark text-isla">';
                echo "<p>El producto ya existe, intentalo de nuevo!</p>"; 
            break;
            case 2: 
                echo '<aside id="reg" class="exito card bg-dark text-isla">';
                echo "<p>Producto registrado correctamente.</p>"; 
            break;
            case 3: 
                echo '<aside id="reg" class="falla card bg-dark text-isla">';
                echo '<p>Error, faltan datos. </p>'; 
            break;
        }
        echo '<a href="#" class="btn bg-isla text-white">cerrar</a></aside>';
    }
    
    if(isset($_GET['e'])){
        switch($_GET['e']){
            case 1: 
                echo '<aside id="reg" class="falla card bg-dark text-isla">';
                echo "<p>El usuario ya existe, intentalo de nuevo!</p>"; 
            break;
            case 2: 
                echo '<aside id="reg" class="exito card bg-dark text-isla">';
                echo "<p>Usuario registrado correctamente.</p>"; 
            break;
            case 3: 
                echo '<aside id="reg" class="falla card bg-dark text-isla">';
                echo '<p>Acceso Restringido "Kappa"" </p>'; 
            break;
			}
			echo '<a href="#" class="btn bg-isla text-white">cerrar</a></aside>';
		}
        if(isset($_GET['ac'])){
            switch($_GET['ac']){
                case 1: 
					echo '<aside id="reg" class="falla card bg-dark text-isla">';
					echo "<p>Error al actualizar./p>"; 
                break;
				case 2: 
					echo '<aside id="reg" class="exito card bg-dark text-isla">';
					echo "<p>Actualizado correctamente.</p>"; 
                break;
				case 3: 
					echo '<aside id="reg" class="falla card bg-dark text-isla">';
					echo '<p>Acceso Restringido "Kappa"" </p>'; 
                break;
			}
			echo '<a href="#">cerrar</a></aside>';
		}
    }  
    else{
        ?>
		<div class="nav navbar-nav navbar-right">
      <li class="nav-item"><a class="nav-link" href="index.php?r=1" ><i class="fa fa-sign-in" aria-hidden="true"></i> Crear cuenta</a></li>
    </div>
		<div class="newuser" id="newUser">
      <span class="closebtn" id="cerrarAlerta">&times;</span>  
            <strong>¡Hola!</strong>. No tienes una cuenta en LiM
           <br>
				 <a href="index.php?r=1"><i class="fa fa-user-plus" aria-hidden="true"></i> Crear cuenta aquí!</a>
      </div>	
           <?php
            echo '</header>';
    ?>

    <div class="container-fluid">
      <div class="row">
        <div class="container">
		<?php
		if(isset($_GET['r']) && $_GET['r']==1){
            include "nuevousuario.php";
		}
        
		if(isset($_GET['e'])){
            switch($_GET['e']){
                case 1: 
					echo '<aside id="reg" class="falla card bg-dark text-isla">';
					echo "<p>El usuario ya existe, intentalo de nuevo!</p>"; 
                break;
				case 2: 
					echo '<aside id="reg" class="exito card bg-dark text-isla">';
					echo "<p>Usuario registrado correctamente.</p>"; 
                break;
				case 3: 
					echo '<aside id="reg" class="falla card bg-dark text-isla">';
					echo '<p>Acceso Restringido "Kappa"" </p>'; 
                break;
			}
			echo '<a href="#" class="btn bg-isla text-white">cerrar</a></aside>';
		}
        if(isset($_GET['ac'])){
            switch($_GET['ac']){
                case 1: 
					echo '<aside id="reg" class="falla">';
					echo "<p>Error al actualizar./p>"; 
                break;
				case 2: 
					echo '<aside id="reg" class="exito">';
					echo "<p>Actualizado correctamente.</p>"; 
                break;
				case 3: 
					echo '<aside id="reg" class="falla">';
					echo '<p>Acceso Restringido "Kappa"" </p>'; 
                break;
			}
			echo '<a href="#">cerrar</a></aside>';
		}
        ?>
    </div>
    </div>
    </div>
       <div class="container-fluid">
         <div class="row">
       <div class="container">
        <?php 
	   if( isset($_GET['section'])){
           switch($_GET['section']){
               case 1:
				include "productos.php";
            break;
			case 3:
				include "nosotros.php";
            break;
        }?>
      <hr>
        <?php
      }
      ?>  
    <div class="container-fluid">
      <div class="row">
           <div class="container mb-5 bg-light">
            <?php 
                include "iniciarsesion.php";
                
                ?>
      </div>
    </div>
            <?php 
        
    }
    ?>
    </div>
  </div>
  </div>
    </div>
   
  
  
  </div>
  </div>
</div>


	<footer class="container-fluid text-center bg-light text-dark bottom-footer">
    <br>    
    <div class="d-flex justify-content-center">
		<p class="text-muted small">Usuarios Registrados:
            
            <?php
            $query = "SELECT count(*) as total FROM usuarios ";
            
            if ($resultado = mysqli_query($cnx, $query)) {
                
                $data=mysqli_fetch_assoc($resultado);
                
                echo $data['total'];
                
            }  
            ?>
            
        </p>
        
		<p class="text-muted small ml-1">Productos totales:
            
            <?php
            $query = "SELECT count(*) as total FROM productos ";
            
            if ($resultado = mysqli_query($cnx, $query)) {
                
                $data=mysqli_fetch_assoc($resultado);
                
                echo $data['total'];

            }  
            ?>
            
        </p>
        
		<p class="text-muted small ml-1">Comentarios totales:
            
            <?php
            $query = "SELECT count(*) as total FROM comentarios ";
            
            if ($resultado = mysqli_query($cnx, $query)) {
                
                $data=mysqli_fetch_assoc($resultado);
                
                echo $data['total'];
                
            }  
            ?>
            
        </p>
        
		<p class="text-muted small ml-1">Marcas totales:
            
            <?php
            $query = "SELECT count(*) as total FROM marcas ";
            
            if ($resultado = mysqli_query($cnx, $query)) {
                
                $data=mysqli_fetch_assoc($resultado);
                
                echo $data['total'];
                
            }  
            ?>
            
        </p>
        </div>
        <p>&copy; LaIslaMedia - 2020</p>
        <p> <span class="text-muted small">Developed by  <a href="www.instagram.com/swing_av" target="_BLANK" class="text-muted">Agencia Swing </a> </span> </p>
        <span class="small text-muted ds-none">This website is using <a href="https://getbootstrap.com" target="_blank" class="text-muted"> Bootstrap v4.3.1,</a> <a href="https://jquery.com" class="text-muted" target="_blank">jQuery v3.2.1</a> & <a href="http://fontawesome.io/" target="_blank" class="text-muted">Font Awesome 4.7.0</a></span>
</footer>
<script src="templates/js/jquery.min.js"></script>
<script src="templates/js/bootstrap.min.js"></script>

<script type="text/javascript">
$('#cerrarAlerta').click(function() {
    $('#newUser').addClass('ds-none');
});
</script>
</body>