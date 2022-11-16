<?php
if( !isset($_SESSION['id_nivel']) || $_SESSION['id_nivel'] != 1 ){
	header("Location: ../index.php?e=3#reg");
	exit;
}
?>
	<div class="container">
    <div class="row mt-2">
        <div class="col-md-3 bg-isla-dark text-white">
		<div class="nav flex-column nav-pills pt-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		<ul class="nav flex-column">
                <li class="nav-item pb-1"><i class="fa fa-home fa-fw"></i>Panel Administración</li>
                <li class="nav-item"><a class="nav-link" href="index.php?section=6&edit=2"><i class="fa fa-user fa-fw"></i> Usuarios</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php?section=6&edit=3"><i class="fa fa-comments fa-fw"></i> Comentarios</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php?section=6&edit=4"><i class="fa fa-copyright fa-fw"></i> Marcas</a></li>
                <li class="nav-item"><a class="nav-link" href="index.php?section=6&edit=1"><i class="fa fa-product-hunt fa-fw"></i> Productos</a></li>
            </ul>
		</div>
		</div>
        <div class="col-md-9 p-2">
            
	<?php
	if(isset($_GET)){
		foreach ($_GET as $indice => $valor) {
			switch ($indice) {
                case 'ap':
					include "templates/agregaProducto.php";
					break;
				case 'mp':
					include "templates/modificaProducto.php";
					break;
				case 'ep':
					include "templates/eliminaProducto.php";
					break;
				case 'mu':
					include "templates/modificaUsuario.php";
					break;
				case 'eu':
					include "templates/eliminaUsuario.php";
					break;
				case 'em':
					include "templates/eliminaComentario.php";
					break;
				case 'amc':
					include "templates/agregarMarca.php";
					break;
                case 'amcc':
					include "templates/agregaMarca.php";
					break;
				case 'emc':
					include "templates/eliminarMarca.php";
					break;
				case 'emmc':
					include "templates/eliminaMarca.php";
					break;
				case 'mmc':
					include "templates/modificarMarca.php";
					break;
				case 'mmmc':
					include "templates/modificaMarca.php";
					break;
			}
		}
	}
	if( isset($_GET['edit']) ){
		switch($_GET['edit']){
			case 1:
				include "panelProductos.php";
				break;
			case 2:
				include "panelUsuarios.php";
				break;
			case 3:
				include "panelComentarios.php";
				break;
			case 4:
				include "panelMarcas.php";
				break;
		}
	}else{
		include "panelProductos.php";
	}
	?>
	
	</div>
    </div>
</div>
	