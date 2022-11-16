$(function(){
    $('#menu-notes').panel();
    $('#menu-notes-list').listview();
    $('#refresh').on('click',function(){
        localStorage.removeItem('notas');
        localStorage.removeItem('nombre');
        location.reload();
    });
     $(".tema-plug").on('click', function(){
        let tem = $("#tema").attr("href");
        if(tem == "css/DVCut-A.min.css" ){
            $('#tema').attr("href", "css/DVCut-B.min.css");
            $('section').css('color','white');
            $('.notas-v').css("color","black");
            $('.tema-plug').html('Modo Claro');
        } else {
            $('#tema').attr("href", "css/DVCut-A.min.css");
            $('section').css('color','black');
            $('.notas-v').css('color','black');
            $('.tema-plug').html('Modo Oscuro');
        }
    })
    function agregarBotonNota(i, apellido,nombre) {
        
        let nota1 = notas[i].notaP1;
        let nota2 = notas[i].notaP2;
        let nota3 = notas[i].notaTP;
        let nota4 = notas[i].notaF;
        if(nota1==="AUS"){
            nota1= 0;
        }else{
        nota1 = notas[i].notaP1;
        }
        if(nota2==="AUS"){
            nota2= 0;
        }else{
        nota2 = notas[i].notaP2;
        }
        if(nota3==="AUS"){
            nota3= 0;
        }else{
            nota3 = notas[i].notaTP;
        }
        if(nota4==="AUS"){
            nota4= 0;
        }else{
            nota4 = notas[i].notaTP;
        }
        total = parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3);
        total = total/3;
        total = total.toFixed(2);
        total = Number(total);
    let templateButton = '<div data-role="collapsible" data-item="'+i+'" data-corners="false" class="colap"><h4>'+apellido+' '+nombre+'</h4>'+
        '<div id="cuerpo"><p>1er Parcial: '+notas[i].notaP1+'</p>'+
        '<p>2do Parcial: '+notas[i].notaP2+'</p>'+
        '<p>TP: '+notas[i].notaTP+'</p>'+
        '<p>Promedio: '+total+'</p>'+
        '<p>Nota Final: '+notas[i].notaF+'</p>'+
            '<div class="col-12">'+
            '<a class="delete" data-mini="true" data-role="button" id="del" '+
            'data-i="'+ i +
            '">Eliminar</a>'+
            '</div>' +
            '<div class="col-12">'+
            '<a class="editar" data-mini="true" data-role="button" id="edit" '+
            'data-i="'+ i +
            '">Editar</a>'+
            '</div>'+
        '</div>';
        $('#lista-botones').append(templateButton);
    }
    function regenerarListaBotones() {
        for(let i = 0; i < notas.length; i++) {
            agregarBotonNota(i, notas[i].apellido,notas[i].nombre);
        }
        location.reload();
    }
    
    let notas;
    if(localStorage.getItem('notas') != null) {
        notas = localStorage.getItem('notas');
        notas = JSON.parse(notas);
        for(let i = 0; i < notas.length; i++) {
            agregarBotonNota(i, notas[i].apellido, notas[i].nombre);
        }
    } else {
        notas = [];
        $('#not-bod').html('<div class="col-12 col-md-12" id="noalum"><p class="center">No existen registros.</p></div>');
        $('#borrarall').hide();
    }
    
    let form = $('#form');
    form.on('submit',function(x) {
       x.preventDefault();
        
        let nombre = $('#nombre');
        let apellido = $('#apellido');
        let comision = $('#comision');
        let notaP1 = $('#notaP1');
        let notaP2 = $('#notaP2');
        let notaTP = $('#notaTP');
        let notaF = $('#notaF');
        let statusBox = $('#status');
        statusBox.css('display', 'block');
        if(nombre.val() == '') {
            nombre.focus().css('box-shadow','0px 0px 1px red');
            statusBox.html("El nombre no debe estar vacio.").addClass('alertita');
            return false;
        }
        if(apellido.val() == '') {
            apellido.focus().css('box-shadow','0px 0px 1px red');
            statusBox.html("El apellido no debe estar vacio.").addClass('alertita');
            return false;
        }
        if(comision.val() == '') {
            comision.focus().css('box-shadow','0px 0px 1px red');
            statusBox.html("La comision no debe estar vacia.").addClass('alertita');
            return false;
        }
        if(notaP1.val()>10){
            notaP1.focus().css('box-shadow','0px 0px 1px red');
            statusBox.html("La nota debe ser menor o igual a 10.").addClass('alertita');
            return false;
        }
        if(notaP2.val()>10){
            notaP2.focus().css('box-shadow','0px 0px 1px red');
            statusBox.html("La nota debe ser menor o igual a 10.").addClass('alertita');
            return false;
        }
        if(notaTP.val()>10){
            notaTP.focus().css('box-shadow','0px 0px 1px red');
            statusBox.html("La nota debe ser menor o igual a 10.").addClass('alertita');
            return false;
        }
        if(notaF.val()>10){
            notaF.focus().css('box-shadow','0px 0px 1px red');
            statusBox.html("La nota debe ser menor o igual a 10.").addClass('alertita');
            return false;
        }
        let notaPP1 = notaP1.val();
        if(notaP1.val()==0) {
            notaPP1 = "AUS";
        }else {
            notaPP1 = $('#notaP1').val();
        }
        let notaPP2 = notaP2.val();
        if(notaP2.val()==0) {
            notaPP2 = "AUS";
        }else {
            notaPP2 = $('#notaP2').val();
        }
        let notaTPP = notaTP.val();
        if(notaTP.val()==0) {
            notaTPP = "AUS";
        }else {
            notaTPP = $('#notaTP').val();
        }
        let notaFF = notaF.val();
        if(notaF.val()==0) {
            notaFF = "AUS";
        }else {
            notaFF = $('#notaF').val();
        }
        let nuevaNota = {
            "nombre"    : nombre.val(),
            "apellido"  : apellido.val(),
            "comision"  : comision.val(),
            "notaP1"    : notaPP1,
            "notaP2"    : notaPP2,
            "notaTP"    : notaTPP,
            "notaF"    : notaFF
        };
        let cantidadNotas = notas.push(nuevaNota);
        
        localStorage.setItem('notas',JSON.stringify(notas));
        
        let indice = cantidadNotas - 1;
        agregarBotonNota(indice,nuevaNota.nombre);
        
        
        $.alert({
            title: 'Éxito',
            content: 'La nota se agregó correctamente.',
            type: 'green',
            onClose: function() {
                location.href = "#notas";
                location.reload();
            }
        });
        nombre.val('');
        apellido.val('');
        comision.val('');
        notaP1.val('');
        notaP2.val('');
        notaTP.val('');
        notaF.val('');
    });

    $('#borrarall').on('click',function() {
        localStorage.removeItem('notas');
        location.reload();
    });
    
    $('#lista-botones').on('click','.delete',function() {
            let i = $(this).attr('data-i');  
            notas.splice(i,1);
            localStorage.setItem('notas',JSON.stringify(notas));
            regenerarListaBotones();
        if(notas.length==0){
       localStorage.removeItem('notas');
        location.reload();
                }
        });
    
    function agregarBotonAsis(i, nombre, apellido) {
        let templateButton = '<div class="col-7 info-box">'+
                        '<span class="nombre">'+ nombre + '</span> <span class="apellido">' + apellido + '</span></div>'+
                    '<div class="col-5">'+
                    '<select class="asistencia" data-id="'+ i +'">'+
                    '<option value="a">Ausente</option>'+
                    '<option value="p">Presente</option>'+
                    '<option value="t">Tarde</option>'+
                    '</select>'
                   '</div>';
        $('#asis-body').append(templateButton);

    }
    let asis;
    if(localStorage.getItem('notas') != null) {
        asis = localStorage.getItem('notas');
        asis = JSON.parse(asis);
        for(let i = 0; i < asis.length; i++) {
            agregarBotonAsis(i, asis[i].apellido, asis[i].nombre);
        }
            let boton = '<button type="submite" id="guardar-asis">Guardar</button>'
            $('#asis-body').after(boton);
    } else {
        notas = [];
        $('#asis-body').html('<div class="col-12"><p class="center">No hay alumnos</p><p>'+
        '<a data-role="button" hreF="#carga">Agregar Alumno</a></p></div>');
    }
    let asisten = [];
    let formA = $('#form-asis');
    formA.on('submit',function() {
 
        $.alert({
            title: 'No Disponible',
            content: 'Esta funcionalidad todavia no esta disponible',
            type: 'red',
            onClose: function() {
                location.href='index.html';
            }
        });
    });
    
    // Hice una alerta para almacenar un nombre temporal
    if(localStorage.getItem('nombre') != null) {
        let nom;
        nom = localStorage.getItem('nombre');
        nom = JSON.parse(nom);
        $('#nomb').html(nom);
    }else {
    $.confirm({
        title: "Bienvenido/a!",
        content: 'Hemos detectado que es tu primera vez utilizando nuestra App. Por favor, ingresa tu nombre para poder identificarte.<br><br><input type="text" id="nombb" placeholder="Ingresar nombre">',
        type:'green',
        confirmIcon: 'Aceptar',
        closeIcon: 'Después',
        buttons: {
            Aceptar: function(aceptar){
                let cuerpo1 = $('#nombb').val();
                // Validaciónes si es string
                if(cuerpo1 != ""){
                    // Validación si es numerico
                    if($.isNumeric(cuerpo1)){
                        $.confirm({
                        title: "Error!",
                        content: 'Debes ingresar un nombre valido.<br><br><input type="text" id="nombb" placeholder="Ingresar nombre">',
                        type: 'red',
                        confirmIcon: 'Aceptar',
                        closeIcon: 'Después',
                        buttons: {
                            Aceptar: aceptar,
                            Después: function(){
                                if($.isNumeric(cuerpo1)){
                                $('#nomb').html("");
                                }else{
                                $('#nomb').html("");
                                }
                            }
                        }
                    });
                    }else{
                    let nomb1;
                    nomb1 = cuerpo1;
                    localStorage.setItem('nombre',JSON.stringify(nomb1));
                        }
                    $('#nomb').html(cuerpo1);
                }else{
                    $.confirm({
                        title: "Error!",
                        content: 'No puedes dejar tu nombre vacio.<br><br><input type="text" id="nombb" placeholder="Ingresar nombre">',
                        type: 'red',
                        confirmIcon: 'Aceptar',
                        closeIcon: 'Después',
                        buttons: {
                            Aceptar: aceptar,
                            Después: function(){
                                $('#nomb').html("");
                            }
                        }
                    });
                }              
            },
            Después: function(){
                $('#nomb').html("");
            }
        },
        onClose:function(){
           let nomb1 = [];
        }
    });  
    }
    $('#contactos').on('submit',function(z){
        z.preventDefault();
        let stat = $('#statuss');
        stat.css('display', 'block');
        let nomm = $('#nombreContacto');
        let appe = $('#apellidoContacto');
        let emaill = $('#emailContacto');
        let celn = $('#celContacto');
        let mensc = $('#mensajeContacto');
        
        if(nomm.val() == '') {
            nomm.focus().css('box-shadow','0px 0px 1px red');
            stat.html("El nombre no debe estar vacio.").addClass('alertita');
            return false;
        }
        if(appe.val() == '') {
            appe.focus().css('box-shadow','0px 0px 1px red');
            stat.html("El apellido no debe estar vacio.").addClass('alertita');
            return false;
        }
        if(emaill.val() == '') {
            emaill.focus().css('box-shadow','0px 0px 1px red');
            stat.html("El email no debe estar vacio.").addClass('alertita');
            return false;
        }
        if(celn.val() == '') {
            celn.focus().css('box-shadow','0px 0px 1px red');
            stat.html("El celular no debe estar vacio.").addClass('alertita');
            return false;
        }
        if(mensc.val() == '') {
            mensc.focus().css('box-shadow','0px 0px 1px red');
            stat.html("El mensaje no debe estar vacio.").addClass('alertita');
            return false;
        }
    let dataE = {
    name: nomm.val(),
    apellido: appe.val(),
    email: emaill.val(),
    cel: celn.val(),
    message: mensc.val()
};
$.ajax({
    type: "POST",
    url: "enviar.php",
    data: dataE,
    success: function(){
        $.alert({
            title: 'Éxito',
            content: 'Consulta enviada correctamente.',
            type: 'green',
            onClose: function() {
                location.reload();
        }});
    }
});
    })
    
    let toscont = $('#contenido-tos');
    let ppcont = $('#contenido-pp');
    let verTOS = $('#verTOS');
    let verPP = $('#verPP');
    verTOS.on('click',function(){
    ppcont.css('display','none');
            if ( !toscont.is(':hidden') ) {
        toscont.html('');
    }
    toscont.slideToggle(1000, function(){
        if (!$(this).is(':hidden')) {
        toscont.html('<h4 class="center" id="terminoss" >Términos y Condiciones de Uso</h4><p class="center">Derechos de autor y marcas registradas. Todo el contenido es propiedad de DaVinci Notes © 2000 - 2018. Todos los derechos de autor y marcas registradas reservados.</p><p class="center">Contenido</p><p>Todo texto, información, datos, fotografías, gráficos, código html, software informático, código fuente y código objeto, muestras de audio y video, marcas y logotipos, y similares (en adelante el "Contenido") que aparezcan en este sitio web optimizado para dispositivos móviles, servicios de dispositivos móviles o aplicaciones de dispositivos móviles (en conjunto "Aplicación Móvil") pertenecen a Gidoni IbarraGarcía Fabeiro Company (en adelante la "Compañía" o "Da Vinci Notes") o sus empresas afiliadas, licenciatarios o proveedores, salvo que quede expresamente especificado en esta Aplicación Móvil. Los Usuarios (como se definen en el presente documento) sólo pueden utilizar el Contenido en un dispositivo móvil (por ejemplo, Apple iPhone o iPad, dispositivo Android o dispositivo móvil con Microsoft Windows) que posean o controlen, y solamente por motivos personales, internos y sin fines comerciales. “© 2018 Da Vinci Notes Todos los derechos reservados.” Ningún otro uso del Contenido, incluyendo, entre otras, cualquier clase de reedición del mismo, está permitido sin previa autorización por escrito otorgada por la Compañía. Todo Usuario que haya violado comprobadamente la propiedad intelectual de un tercero mediante la retransmisión o publicación de material vinculado con esta Aplicación Móvil que infrinja los derechos de autor u otros derechos legales de dicho tercero será excluido de esta Aplicación Móvil.</p><p>Todas las marcas registradas utilizadas en esta Aplicación Móvil son propiedad de la Compañía o, en unos pocos casos, utilizadas con la autorización de sus respectivos titulares. Ningún tercero puede utilizar ni reproducir ninguna marca registrada que incluya, entre otros, logotipos y dominios de Internet que utilicen las marcas registradas “Da Vinci Notes”, “Gidoni IbarraGarcía Fabeiro” o “G I F” (ya sea que se usen o no con letras mayúsculas o espacios) sin el previo consentimiento por escrito de la Compañía o del propietario de la marca registrada.</p><p>Aparte del derecho de uso no exclusivo, no sublicenciable, intransferible, personal y limitado de los Usuarios tal como se especifica en la presente, no se confiere ningún derecho a dicho Contenido ni a porciones del mismo, sin importar la forma en que aparezca, mediante su inclusión en esta Aplicación Móvil o mediante el acceso al mismo por parte del Usuario. Un Usuario no puede: (a) separar ningún Contenido individual o componente de la Aplicación Móvil para otro uso que el indicado en relación a la Aplicación Móvil; (b) incorporar una porción del mismo a los propios programas del Usuario o recopilar cualquier porción en combinación con los propios programas del Usuario; (c) transferirlo para ser utilizado por otro servicio; o (d) vender, arrendar, ceder, prestar, distribuir, comunicar públicamente, transformar o sublicenciar la Aplicación Móvil o conceder en modo alguno cualquier derecho a la Aplicación Móvil absoluta o parcialmente. La Compañía será responsable de todo mantenimiento o soporte técnico de la Aplicación Móvil; ningún Tercero (como se define en el presente documento) será responsable de brindar servicios de mantenimiento o soporte técnico para la Aplicación Móvil.</p><p>La Compañía se reserva el derecho de enmendar, complementar o suspender total o parcialmente la Aplicación Móvil en forma ocasional. Asimismo, la Compañía se reserva el derecho de cambiar los Términos y Condiciones en cualquier momento, con vigencia inmediata a partir del momento que se actualiza la Aplicación Móvil. Los términos “Usuario” y “Usuarios” se refieren a todo individuo o entidad que use, acceda, descargue, instale, obtenga o brinde información desde y hacia esta Aplicación Móvil. Todas las referencias al plural en la presente incluirán al singular y las referencias al singular incluirán al plural salvo que se desprenda otra interpretación del contexto.</p><p>Reclamos por violación de derechos en la aplicación móvilEn caso de que un visitante crea que sus derechos de propiedad intelectual o marcas registradas puedan estar siendo violados por materiales publicados o almacenados en esta Aplicación Móvil, deberá completar la “Notificación de Violación de Derechos” del enlace y enviar un correo electrónico a nuestro webmaster: webmaster@Da Vinci Notes.com con una copia de confirmación enviada a:</p><ul><li>Gidoni IbarraGarcía Fabeiro Company</li><li>Office of the General Counsel</li><li>Notice of Infringement</li><li>Av Santa Fe, 3400</li><li>CABA, Buenos Aires, Argentina</li></ul><p>Dicha Notificación debe brindar la información requerida en cumplimiento de las cláusulas aplicables de la Ley de derechos de autor para medios digitales en el nuevo milenio (Digital Millennium Copyright Act, DMCA), Título 17 del Código de los Estados Unidos, Sección 517 (c)(3)(A) (y todas sus modificatorias). Tal como se prevé en dicha Ley, toda notificación que alegue la violación de derechos que incumpla en forma sustancial con las cláusulas antes señaladas no será considerada como prueba fehaciente de "conocimiento real" o una "certidumbre de hechos o circunstancias en las cuales se evidencie una acción de violación de derechos". Por favor, envíe una Notificación por separado para cada caso que desee informar como un caso supuesto de violación de derechos de autor.</p><p>La Compañía ha adoptado e implementado una política que prevé la terminación, en circunstancias apropiadas, de las cuentas de los Usuarios que son infractores reincidentes o que son acusados repetidamente de infracción.</p><p class="center">Uso</p><p>Al usar, acceder, descargar, instalar, obtener o brindar información desde y hacia esta Aplicación Móvil, se considerará que los Usuarios han leído y aceptado estos Términos y Condiciones (incluyendo nuestra Política de Privacidad), que se incorpora al presente documento en virtud de esta referencia. El uso de esta Aplicación Móvil también estará sujeto a los Términos y Condiciones de Da Vinci Notes.com y, si correspondiera, a los Términos y Condiciones de My Account. Tenga presente que todas las referencias al "sitio web" en nuestra Política de Privacidad también se consideran válidas para esta Aplicación Móvil, ya sea que se utilice en forma conjunta o independientemente del Sitio Web de la Compañía en www.Da Vinci Notes.com.</p><p>Los Usuarios deben suspender el uso de esta Aplicación Móvil inmediatamente si no están de acuerdo o no aceptan todos estos Términos y Condiciones. La Compañía se reserva el derecho de eliminar o prohibir a cualquier Usuario la utilización de esta Aplicación Móvil a su sola discreción.</p><p class="center">Cuentas de usuario</p><p>La Compañía puede, a su sola discreción, brindar acceso a los Usuarios a porciones restringidas de esta Aplicación Móvil, incluyendo, entre otros, una o más cuentas de Usuario donde pueda brindarse y/u obtenerse la información y servicios específicos de los clientes.</p><p>Los Usuarios que entren a dichas ubicaciones podrían estar sujetos a Términos y Condiciones adicionales según se especifique en relación a los servicios proporcionados. Los Usuarios con cuentas de servicio son responsables exclusivos de preservar la confidencialidad de toda información de acceso, la información de la cuenta del Usuario y todas las acciones u omisiones vinculadas con dicha cuenta.</p><p class="center">Envío de contenidos</p><p>En caso de que un Usuario envíe imágenes digitales u otro contenido, incluidas todas las fotografías, ilustraciones, gráficos y texto (en forma conjunta, “Materiales”) a la Compañía a través de la Aplicación Móvil, tendrán validez los siguientes términos:</p><p>El Usuario solo podrá enviar a la Compañía, a través de la Aplicación Móvil, Materiales de los cuales posea todos los derechos de propiedad intelectual. Dicho de otro modo, si un Usuario envía una imagen digital a la Compañía, el Usuario debe poseer todos los derechos sobre dicha imagen o el Usuario debe tener la autorización de la persona propietaria de tales derechos. Los menores de edad no pueden enviar Materiales a la Compañía a través de la Aplicación Móvil. Asimismo, un Usuario no puede enviar ninguna información susceptible de identificación personal sobre un niño menor de 13 años de edad.</p><p>Por el presente el Usuario cede a la Compañía los derechos y licencias mundiales, sin exclusividad, libres de regalías y a perpetuidad para (a) reproducir, distribuir, transmitir, representar y exhibir públicamente los Materiales, total o parcialmente, de cualquier manera y en cualquier medio para transmitir información, existente en la actualidad o que se cree en el futuro (“Medios”), (b) modificar, adaptar, traducir y crear trabajos derivados de los Materiales, total o parcialmente, de cualquier manera y en cualesquiera Medios, y (c) otorgar sublicencias por los derechos antedichos, total o parcialmente, a terceros con o sin canon de concesión. Por el presente el Usuario otorga a la Compañía y sus sublicenciatarios una licencia sin exclusividad, mundial y libre de regalías para usar todas las marcas registradas, nombres comerciales y los nombres e imágenes de todo individuo que aparezca en los Materiales. El Usuario otorga a la Compañía y sus sublicenciatarios el derecho a usar el nombre que el Usuario envíe en relación con los Materiales.</p><p class="center">Terceros</p><p>Los prestadores de servicio de telefonía inalámbrica de los Usuarios, los fabricantes y vendedores de los dispositivos móviles en los que el Usuario descargue, instale, utilice o acceda a la Aplicación Móvil, el creador del sistema operativo para los dispositivos móviles de los Usuarios y el operador de cualquier tienda de aplicaciones o servicios similares mediante los cuales los usuarios obtengan la Aplicación Móvil, si existieran, (en conjunto, los “Terceros”) no son parte de estos Términos y Condiciones y no son propietarios ni responsables de la Aplicación Móvil. Los Terceros no brindan ninguna garantía en relación con la Aplicación Móvil. No son responsables del mantenimiento u otros servicios de soporte técnico de la Aplicación Móvil y no serán responsables ante ningún otro reclamo, pérdidas, imputación de responsabilidades, daños y perjuicios, costos o gastos vinculados con la Aplicación Móvil.</p><p>Los Usuarios reconocen y aceptan que los Terceros y sus empresas subsidiarias son terceros beneficiarios de estos Términos y Condiciones y que ellos tienen el derecho (y se asumirá que han aceptado tal derecho) de ejercer estos Términos y Condiciones ante los usuarios como terceros beneficiarios.</p><p>La Aplicación Móvil fue creada para la versión más reciente disponible en el mercado de los sistemas operativos de los dispositivos móviles de los Usuarios y pueden surgir inconvenientes de compatibilidad cuando se utilicen versiones anteriores. La cobertura de la red inalámbrica y la velocidad de la red de Wi-Fi varían según el proveedor y la ubicación geográfica. La Compañía no se responsabiliza por las limitaciones y/o fallas en el funcionamiento de ningún servicio inalámbrico o Wi-FI que se use para acceder a esta Aplicación Móvil ni por la seguridad de los servicios inalámbricos o Wi-Fi. Asimismo, la Compañía no se responsabiliza de los cargos o tarifas por uso de redes de datos, que son exclusiva responsabilidad del Usuario.</p><p class="center">Actualizaciones de la aplicación móvil</p><p>La Compañía puede solicitar a los Usuarios que actualicen su versión de la Aplicación Móvil en cualquier momento. Aunque se harán todos los esfuerzos por conservar las configuraciones y preferencias personales de los Usuarios, seguirá existiendo la posibilidad de que las mismas se pierdan.</p><p class="center">Problemas de cobertura inalámbrica y desactivación de funciones</p><p>Al intentar realizar una transacción en la Aplicación Móvil, es posible que la conexión inalámbrica se interrumpa o que se desactive una función. En caso de que esto ocurriera, los Usuarios deberán verificar el estado de la transacción que se haya intentado realizar apenas ingresen a un área con cobertura inalámbrica o tengan acceso a una computadora. Los Usuarios también pueden ponerse en contacto con un representante de servicio al cliente de Da Vinci Notes a través del enlace “Contáctenos” que se brinda a continuación:</p><p class="center">Usuarios finales del gobierno de los Estados Unidos de América</p><p>Todo software informático que sea parte de la Aplicación Móvil y esté disponible para descarga o uso es un “Elemento Comercial” como se define en la § 2.101 del título 48 del Código Federal de Regulaciones (C.F.R.) compuesto por “software informático comercial” y “documentación de software informático comercial”, como se definen los términos la § 12.212 del título 48 del Código Federal de Regulaciones (C.F.R.) o la § 227.7202 del título 48 del Código Federal de Regulaciones (C.F.R.), según corresponda. En consonancia con estas cláusulas, dicho software informático es cedido con licencia a los usuarios finales del Gobierno de los Estados Unidos de América (a) solo como un Elemento Comercial, y (b) solo con aquellos derechos que se conceden al resto de los usuarios finales en cumplimiento con estos Términos y Condiciones. Los derechos no publicados son derechos reservados conforme a las leyes sobre derechos de autor de los EE. UU. de América.</p><p class="center">Responsabilidad limitada</p><p>LOS TERCEROS, LA COMPAÑÍA Y SUS EMPRESAS MATRICES Y AFILIADAS, JUNTO CON LOS RESPECTIVOS DIRECTIVOS, DIRECTORES, PERSONAL, EMPLEADOS Y REPRESENTANTES (EN CONJUNTO REFERIDOS COMO LAS “PARTES EXENTAS”) NO SERÁN RESPONSABLES NI ESTARÁN SUJETOS A ACCIONES LEGALES, Y POR LA PRESENTE EL USUARIO RENUNCIA A TODO RECLAMO, DEMANDA, IMPUTACIÓN DE RESPONSABILIDADES, CAUSA LEGAL, QUERELLA, RECLAMACIÓN DE DAÑOS Y PERJUICIOS, POR RAZÓN DE, ENTRE OTROS, DAÑOS DIRECTOS, INDIRECTOS, ACCIDENTALES, INCIDENTALES, DERIVADOS, CIRCUNSTANCIALES, EXTRAORDINARIOS, ESPECIALES O PUNITIVOS DE CUALQUIER NATURALEZA CON RESPECTO A ESTA APLICACIÓN MÓVIL (INCLUYENDO LOS PRODUCTOS, SERVICIOS Y CONTENIDOS DE LAS PARTES EXENTAS), AÚN CUANDO LAS PARTES EXENTAS HUBIERAN SIDO ADVERTIDAS DE LA POSIBILIDAD DE DICHOS DAÑOS. EL ÚNICO RECURSO DE LOS USUARIOS ANTE TALES RECLAMOS, DEMANDAS, IMPUTACIÓN DE RESPONSABILIDADES, CAUSAS LEGALES, QUERELLAS O RECLAMOS DE DAÑOS Y PERJUICIOS ES PONER FIN AL USO DE ESTA APLICACIÓN MÓVIL.</p><p class="center">Privacidad</p><p>Nuestra política de privacidad en relación a cualquier información obtenida por la Compañía a través de esta Aplicación Móvil puede consultarse en la sección Política de Privacidad del Sitio Web de la Compañía. Pueden tener validez algunas reglas adicionales en materia de privacidad según se establece en las funciones de esta Aplicación Móvil restringidas para servicios específicos del Usuario.</p><p>El uso de esta Aplicación Móvil implica la transmisión electrónica de información a través de las redes del proveedor de servicio inalámbrico. En vista de que la Compañía no opera ni controla las redes inalámbricas utilizadas para acceder a la Aplicación Móvil, la Compañía no es responsable de la privacidad o seguridad de las transmisiones inalámbricas de datos. Los Usuarios deberán utilizar proveedores de servicios acreditados y verificar junto a su proveedor de servicios inalámbricos la información relativa a sus prácticas en materia de privacidad y seguridad.</p><p class="center">Patrocinio</p><p>La Compañía no recomienda, patrocina ni promociona negocios, servicios o productos de terceros, a excepción de manifestaciones de recomendación o patrocinio que la Compañía realice de manera expresa, si las hubiere, en esta Aplicación Móvil. Si esta Aplicación Móvil proporciona información sobre terceros o proporciona contenido de terceros, e incluso enlaces a sitios web de terceros, la Compañía no será responsable de ningún daño o perjuicio relacionado con cualquier información de terceros, aunque ésta contenga errores o equivocaciones. Asimismo, la Compañía no será responsable ni estará sujeta a acción legal por los servicios o productos de terceros. Consulte también la sección en materia de enlaces de nuestra Política de privacidad, incluido el descargo de responsabilidad por los contendidos de terceros.</p><p class="center">Exclusión de garantía</p><p>LAS PARTES EXENTAS NO HACEN MANIFESTACIÓN ALGUNA EN CUANTO A LA FUNCIONALIDAD Y USO DEL CONTENIDO DE ESTA APLICACIÓN MÓVIL. EL USO Y NAVEGACIÓN QUE HAGA EL USUARIO CON ESTA APLICACIÓN MÓVIL ES A RIESGO EXCLUSIVO DEL PROPIO USUARIO. TODA LA INFORMACIÓN CONTENIDA EN ESTA APLICACIÓN MÓVIL ES PROPORCIONADA "TAL COMO ESTÁ” Y “SEGÚN ESTÁ DISPONIBLE”, SIN ASEVERACIONES NI GARANTÍAS, YA SEAN EXPRESAS O TÁCITAS. LOS USUARIOS NO DEBEN ASUMIR QUE LA INFORMACIÓN INCLUIDA EN ESTA APLICACIÓN MÓVIL SE ACTUALIZA CONSTANTEMENTE NI QUE INCLUYE INFORMACIÓN RECIENTE.</p><p>ESTA APLICACIÓN MÓVIL PODRÁ DEJAR DE FUNCIONAR, SER INTERRUMPIDA O FUNCIONAR INDEBIDAMENTE DE FORMA OCASIONAL. LAS PARTES EXENTAS NO TIENEN RESPONSABILIDAD POR DICHO CESE DE FUNCIONAMIENTO, INTERRUPCIÓN O FUNCIONAMIENTO INDEBIDO. LOS USUARIOS QUEDAN ADVERTIDOS DE QUE LA INFORMACIÓN CONTENIDA AQUÍ PODRÍA CONTENER ERRORES TÉCNICOS, INEXACTITUDES, ERRORES DE PROGRAMACIÓN, VIRUS DESCONOCIDOS Y OMISIONES. EL USUARIO ASUME TODOS LOS RIESGOS VINCULADOS CON EL USO DE ESTA APLICACIÓN MÓVIL, Y ACEPTA QUE LA COMPAÑÍA RENUNCIA A TODA GARANTÍA VINCULADA AL USO DE LA APLICACIÓN MÓVIL POR PARTE DEL USUARIO.</p><p>SIN PERJUICIO DE LO DISPUESTO EN CUALQUIER OTRA CLÁUSULA DE ESTOS TÉRMINOS Y CONDICIONES, LA COMPAÑÍA RECHAZA TODA MANIFESTACIÓN O GARANTÍA, YA SEA EXPRESA O TÁCITA, DE TODO TIPO EN REFERENCIA A ESTA APLICACIÓN MÓVIL (INCLUYENDO NUESTROS PRODUCTOS, SERVICIOS Y CONTENIDO DEL SITIO) INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS DE COMERCIABILIDAD Y APTITUD PARA UN PROPÓSITO EN PARTICULAR, DE GOCE PACÍFICO, TÍTULO, NO VIOLACIÓN DE LOS DERECHOS DE TERCEROS Y PRECISIÓN. NINGUNA INFORMACIÓN O ASESORAMIENTO ORAL O ESCRITO DADO POR NOSOTROS O NUESTROS REPRESENTANTES AUTORIZADOS CREARÁ UNA GARANTÍA NI AUMENTARÁ DE NINGUNA FORMA EL ALCANCE DE NUESTRAS OBLIGACIONES TAL CUAL SE ESTABLECEN EN ESTOS TÉRMINOS Y CONDICIONES.</p><p class="center">Exoneración</p><p>Los Usuarios liberarán de toda responsabilidad y exonerarán a las Partes Exentas de todo reclamo, demanda, responsabilidad civil, causa legal, querella o daños y perjuicios (incluidos los honorarios y los gastos razonables de abogados) que surjan como consecuencia del uso que dichos Usuarios hagan de la Aplicación Móvil (incluidos nuestros productos, servicios y Contenido), incluyendo, entre otros, la información, contenido o entrega incorrectos de la Aplicación Móvil, o de los productos y servicios de la Compañía o de terceros. La Compañía se reserva el derecho, por cuenta propia, de asumir la defensa y el control exclusivos de cualquier asunto sujeto a exoneración por parte de los Usuarios, pero el hacerlo no exime a los Usuarios de sus obligaciones de exoneración.</p><p class="center">Restricciones a la exportación</p><p>Esta Aplicación Móvil o su tecnología subyacente no pueden ser descargadas, exportadas ni reexportadas: a) a Cuba, Irán, Corea del Norte, Sudán, Siria ni a ningún otro país sujeto a medidas de embargo por parte de los EE. UU. (ni a un residente o ciudadano de estos países); (b) a cualquier persona que esté en la lista de Nacionales Especialmente Designados (Specially Designated Nationals) por el Departamento del Tesoro de los EE. UU. o en la lista de Personas Físicas o Jurídicas Denegadas (Denied Party or Entity List) del Departamento de Comercio de los EE. UU., y (c) a cualquier país, persona, usuario final o entidad prohibidos conforme a las leyes de exportación de los EE. UU.</p><p class="center">Funciones de localización disponibles</p><p>Ciertas funciones de localización (por ejemplo, localizar la oficina de pago de la Compañía más cercana o la estación de GNC más cercana) disponibles en la Aplicación Móvil son provistas por terceros. El uso que hagan los usuarios de esa funcionalidad está sujeta a los términos y condiciones del tercero (y a sus actualizaciones ocasionales). Los usuarios deben utilizar su propio juicio sobre la adecuación e idoneidad de la información. Toda la información de localización es brindada por completo en las condiciones en que se encuentra, sin garantías de ninguna naturaleza.</p><p class="center">Resolución de disputas</p><p class="center">Acuerdo sobre el arbitraje de disputas</p><p>MEDIANTE EL USO, ACCESO, DESCARGA, INSTALACIÓN, OBTENCIÓN O PROVISIÓN DE INFORMACIÓN DESDE Y HACIA ESTA APLICACIÓN MÓVIL, LOS USUARIOS ACUERDAN EXPRESAMENTE QUE TODO RECLAMO, DISPUTA O CONTROVERSIA DE ÍNDOLE LEGAL ENTRE LOS USUARIOS Y LA COMPAÑÍA QUE SURJAN SURGIDOS O ESTÉN VINCULADOS DE CUALQUIER MODO CON LA APLICACIÓN MÓVIL, INCLUIDAS LAS CONTROVERSIAS VINCULADAS CON LA APLICABILIDAD, ALCANCE O VALIDEZ DE CUALQUIERA DE LAS CLÁUSULAS DE ESTOS TÉRMINOS Y CONDICIONES O DE NUESTRA POLÍTICA DE PRIVACIDAD (EN FORMA CONJUNTA, “DISPUTAS”) SERÁN RESUELTAS DE ACUERDO CON LOS PROCEDIMIENTOS AQUÍ ESTABLECIDOS. CUALQUIERA DE LAS PARTES PUEDE PRESENTAR UN RECLAMO CONTRA LA COMPAÑÍA HACIENDO CLIC AQUÍ. EN CASO DE QUE EL RECLAMO NO SE RESUELVA INFORMALMENTE, EL USUARIO ACEPTA POR LA PRESENTE RESOLVER TODAS LAS DISPUTAS MEDIANTE ARBITRAJE VINCULANTE CONFIDENCIAL, SALVO POR LA ÚNICA EXCEPCIÓN QUE SE ESTABLECE MÁS ADELANTE. TODAS LAS DISPUTAS SERÁN RESUELTAS POR UN ÁRBITRO, QUE SERÁ UN ÁRBITRO NEUTRAL DESIGNADO POR ACUERDO DE AMBAS PARTES DE LA DISPUTA. EN CASO DE QUE LAS PARTES NO LOGREN ACORDAR UN ÁRBITRO NEUTRAL LUEGO DE SESENTA (60) DÍAS, JAMS SELECCIONARÁ EL ÁRBITRO NEUTRAL PARA RESOLVER LA DISPUTA. LA COMPAÑÍA CUBRIRÁ LOS COSTOS DEL ÁRBITRO SELECCIONADO POR MEDIO DE ESTE PROCEDIMIENTO DE ACUERDO MUTUO PARA TODOS LOS RECLAMOS DE NATURALEZA NO FRÍVOLA. EL ARBITRAJE SE CELEBRARÁ DE ACUERDO A LAS REGLAS Y PROCEDIMIENTOS INTEGRALES DE ARBITRAJE DE JAMS, PUBLICADOS ENWWW.JAMSADR.COM. LOS USUARIOS ACEPTAN ESPECÍFICAMENTE QUE ESTÁN OBLIGADOS A RESOLVER TODAS LAS DISPUTAS MEDIANTE ARBITRAJE, INCLUYENDO, ENTRE OTROS, LA CAPACIDAD DE HACER VALER ESTE ACUERDO DE ARBITRAJE, SALVO QUE DECIDAN INICIAR UNA ACCIÓN LEGAL EN UN JUZGADO DE DEMANDAS DE MENOR CUANTÍA COMO SE ESTABLECE MÁS ADELANTE. Cada una de las partes acepta pagar los honorarios y gastos de sus propios abogados. Asimismo, el Usuario y la Compañía aceptan que para todo reclamo por daños de menos de $10,000, el arbitraje puede realizarse a criterio del demandante solamente basándose en presentaciones escritas. El Usuario y la Compañía también aceptan que para toda disputa de menos de $10,000, el cliente de la compañía de servicios públicos puede optar por presentar dicho reclamo en un juzgado de demandas de menor cuantía del condado en que el cliente tenga domicilio de facturación, y para todos los otros casos en un juzgado de demandas de menor cuantía de Los Angeles, California. Si la disputa es presentada por un cliente de servicios públicos de la Compañía, el arbitraje se celebrará en el condado donde el usuario tenga domicilio de facturación. Si la disputa es presentada por cualquier otra parte, el arbitraje deberá celebrarse en Los Angeles, California. El árbitro tiene la potestad de otorgar un interdicto judicial, pero no tiene la potestad de conceder daños punitivos. La disputa se regirá por las leyes de California, sin perjuicio de conflicto con las cláusulas de la ley.</p><p class="center">Renuncia a arbitraje colectivo</p><p>En la medida que la plena aplicación de las leyes lo permita, todas las Disputas se resolverán por arbitraje vinculante confidencial en forma individual según la capacidad individual de cada parte, y no como parte integrante de una supuesta demanda colectiva de ninguna acción legal colectiva. El árbitro no tiene la capacidad legal de resolver más que el reclamo de una sola persona, y de ninguna manera puede dirimir ninguna forma de acción legal representativa o colectiva. Los Usuarios aceptan expresamente que ninguna otra Disputa será unificada ni anexada a su Disputa, ya sea mediante acciones legales de arbitraje colectivo u otros procedimientos. Mediante el uso, acceso, descarga, instalación, obtención o provisión de información desde o hacia esta Aplicación Móvil, los Usuarios aceptan que renuncian en forma voluntaria y deliberada a cualquier derecho a participar como representante o miembro de cualquier grupo o colectivo de demandantes de cualquier Disputa.</p><p class="center">Cumplimiento de la decisión del arbitraje</p><p>La decisión del árbitro será final y vinculante para todas las partes sujetas a estos Términos y Condiciones, y puede ser aplicada como precedente en cualquier juzgado de jurisdicción competente.</p><p class="center">Divisibilidad</p><p>Si cualquier cláusula de estos Términos y Condiciones resultara inválida, nula o inaplicable, las cláusulas restantes conservarán de todos modos su total validez y la cláusula inválida, nula o inaplicable será considerada como modificada de modo tal que sea válida y aplicable hasta el máximo alcance permitido por la ley.</p><p class="center">Términos adicionales para dispositivos Apple</p><p>Esta sección se aplica exclusivamente a los Usuarios que utilicen la Aplicación Móvil en un dispositivo Apple (por ejemplo, iPhone, iPad, iPod Touch) (en adelante, denominados “Dispositivo Apple”). La Compañía solamente es responsable de la Aplicación Móvil que usted utiliza en su Dispositivo Apple, y los Usuarios pueden utilizar la Aplicación Móvil en su Dispositivo Apple solamente como se permite en estos Términos y Condiciones y en las “Normas de uso” establecidas en los Términos y Condiciones de la Tienda de Aplicaciones (http://www.apple.com/legal/itunes/appstore/us/terms.html). En relación con el deslinde de responsabilidades entre la Compañía y Apple Inc., en la medida en que: (a) la Compañía debe atender todo reclamo vinculado con el uso o posesión por parte del Usuario o de un tercero de la Aplicación Móvil en el Dispositivo Apple del Usuario, y la compañía será responsable de atender, investigar o defender el reclamo; y (b) la Compañía no ha renunciado efectivamente a ninguna garantía vinculada con la Aplicación Móvil en el Dispositivo Apple del Usuario, se desprende que la Compañía será responsable exclusiva en relación con cualquier garantía del producto u otros reclamos, pérdidas, imputación de responsabilidades, daños y perjuicios, costos o gastos si la Aplicación Móvil no se ajusta a ninguna de las garantías. Si la Aplicación Móvil en el Dispositivo Apple del Usuario no se ajusta a ninguna de las garantías pertinentes, el Usuario puede solicitar a Apple Inc. un reembolso por la suma de la compra de la Aplicación Móvil en el Dispositivo Apple del Usuario, si la hubiera. Apple Inc. no tendrá obligaciones de garantía de ninguna otra naturaleza con respecto a la Aplicación Móvil en el Dispositivo Apple del Usuario. Apple Inc. y sus filiales son terceros exentos de estos Términos y Condiciones, y Apple Inc. y sus filiales pueden hacer valer estos Términos y Condiciones contra los Usuarios en calidad de terceros exentos de estos Términos y Condiciones.</p><p class="center">Idioma prevaleciente</p><p>En el caso de que existiera alguna inconsistencia, ambigüedad o conflicto entre la versión en inglés de estos Términos y Condiciones y las traducidas a otros idiomas, la versión en inglés prevalecerá sobre el resto.</p><p class="center">Preguntas y comentarios</p><p>Los Usuarios que tengan alguna pregunta o duda sobre los Términos y Condiciones para Aplicaciones Móviles pueden ponerse en contacto con el webmaster en relación con esta Aplicación Móvil escribiendo al siguiente correo electrónico: • webmaster@Da Vinci Notes.com. Los Usuarios también pueden enviar sus preguntas y comentarios por correo postal:</p><p class="center">Da Vinci Notes</p><p>Webmaster - Da Vinci Notes Internet Web Site</p><p>Av. Santa Fe X</p><p>CABA, Buenos Aires, Argentina</p>');
        }
    });
    $(this).toggleClass("active");
    return false;
    });
    toscont.hide();

    verPP.on('click',function(){
            if ( !ppcont.is(':hidden') ) {
        ppcont.html('');
    }
    ppcont.slideToggle(1000, function(){
        toscont.css('display','none');
        if (!$(this).is(':hidden')) {
        ppcont.html('<h4 class="center" id="polipriv">Politica de Privacidad</h4><p class="center">Gidoni IbarraGarcía Fabeiro (¨DVNotes¨) asume el compromiso de mantener informadas a las personas que nos visitan respecto de la manera en que utilizamos la información que recopilamos en nuestro sitio web, en nuestro sitio web optimizado para teléfonos móviles y en nuestras aplicaciones para teléfonos móviles (denominados conjuntamente, el “sitio web”). Al utilizar nuestro sitio web u obtener cualquier producto o servicio a través del mismo, usted autoriza a que recopilemos y utilicemos la información según lo establecido en la presente política. Si no está de acuerdo con esta política, por favor no utilice el sitio web.</p><p>Tenga en cuenta que otros sitios accesibles a través del sitio web de DVNotes tienen sus propias políticas de privacidad y prácticas de recopilación, uso y divulgación de datos. Las prácticas de información de estos otros sitios vinculados al sitio web de DVNotes no están cubiertas por esta política de privacidad.</p><p class="center">I. Información que recopilamos y cómo la usamos</p><p>Con el fin de brindarle mejores productos y servicios, el sitio web de DVNotes recopila dos tipos de información: información personal e información no personal.</p><p>Información personal: La "información personal" se refiere a aquella información que nos permite conocer los detalles específicos de quién es usted y puede utilizarse para identificarlo, ponerse en contacto con usted o localizarlo. Usted puede optar por no brindar ningún tipo de información personal y, aún así, podrá tener acceso a la mayoría de las secciones del sitio web. Sin embargo, se puede recopilar cierta información personal de los visitantes que buscan obtener los servicios que ofrece DVNotes en este sitio web, como:</p><p>Inscripción en My Account y uso de My Account;Solicitudes de empleo;Inscripción en el programa CARE u otros programas de asistencia al cliente;Uso de aplicaciones móviles de DVNotes;Solicitudes para participar en programas, descuentos e incentivos de eficiencia energética; y Solicitud de inclusión en listas de correo, correos electrónicos, mensajes de texto, teléfonos fijos o celulares de DVNotes, como se describe más detalladamente en algunas secciones de este sitio web. Asimismo, las comunicaciones en línea que se relacionan con servicios públicos también pueden requerir contactos de seguimiento (como correos electrónicos, mensajes de texto y llamadas en respuesta a una solicitud) y respuestas sobre los servicios que se desean utilizar, incluidos los servicios de facturación y pago.</p><p>Entre los ejemplos de la información personal que usted puede enviar se incluyen su nombre o, al combinarse con su nombre u otra información que razonablemente pudiese ser utilizada para identificarlo a usted, su domicilio postal, número de teléfono, número de celular, dirección de correo electrónico y cualquier otra información de identificación y contacto. También es posible que recopilemos cierta información de su cuenta bancaria (si usted decide proporcionarla), así como otros tipos de información que usted pueda haber ingresado al presentar una solicitud de empleo. En caso de que presente una solicitud para el programa CARE, es posible que también se le pida que divulgue su inscripción en otros programas del gobierno (como los cupones para alimentos/ Programa SNAP, el Ingreso Suplementario del Seguro Social y el Programa National de Almuerzos Escolares o "National School Lunch").</p><p>DVNotes utiliza esta información personal para brindar servicios, desempeñar sus actividades comerciales y mejorar la experiencia de los visitantes de nuestro sitio web.</p><p>Información no personal: “Información no personal” se refiere a la información que no identifica a un individuo en particular por sí sola ni en combinación con otra información no personal. DVNotes puede recopilar información no personal utilizando cookies, agentes o a través de la recopilación de datos de tráfico e información sobre la ubicación.</p><p>Cookies: El sitio web de DVNotes puede almacenar cookies en su computadora u otros dispositivos para permitirnos monitorear el uso que haga del sitio web. No se intenta conocer la identidad de los usuarios individuales, a menos que se tomen medidas para la identificación del visitante por medio de un procedimiento de “aceptación explícita a participar” (opt in), cuando por ejemplo:</p><p>Se soliciten servicios individuales;Se presente una solicitud de empleo;Se solicite quedar incluido en una lista de correo de DVNotes; Se sospeche de una conducta ilícita o de actividades no autorizadas Se requiera la identificación del usuario conforme la ley. Las cookies se utilizan para mejorar la utilidad de nuestro sitio web en beneficio de nuestros visitantes.</p><p>Agentes: También podemos trabajar eventualmente con proveedores de servicios o soluciones informáticas ajenos a nuestra empresa que empleen "agentes" para monitorear, rastrear y analizar el comportamiento y el tráfico de datos del usuario en sus dispositivos y en este sitio web. La información recogida por dichos agentes puede incluir, entre otros: modelo del dispositivo, identificadores únicos de dispositivos ((UDID, por sus siglas en inglés), información de la red móvil, incluido el número de teléfono celular, versión del agente, plataforma, versión SDK, fecha de registro (timestamp), clave API (identificador de aplicación), versión de la aplicación, modelo, fabricante y versión de sistema operativo del dispositivo o del hardware, hora de inicio/finalización de la sesión, ubicación, huso horario y tipo de red (WiFi, etc.) La información que se recopila a través de los agentes se utiliza para personalizar los servicios y mejorar la funcionabilidad del sitio web. La información que se recopila a través de los agentes puede identificar a usuarios individuales en combinación con la información personal que se haya proporcionado con anterioridad.</p><p>Información de tráfico: DVNotes recopila y mantiene, automáticamente, información estadística de los registros de datos de nuestro sitio web relativos a la actividad, la navegación, el volumen y el flujo de tráfico en la red del sitio web ("información de tráfico"). Los siguientes son algunos ejemplos de información de tráfico:</p><p>Nombre del dominio o URL a través del cual el visitante accede a Internet (por ejemplo, "compañíaXYZ.com", "universidadXYZ.edu" u "organismoXYZ.gov"); Número de protocolo de Internet (IP); Tipo de navegador web utilizado; Paginas web visitadas; y Fecha y hora de visita al sitio web.</p> <p>Nuestro propósito principal al recopilar información de tráfico es optimizar la utilidad del servicio que brindamos a los visitantes de nuestro sitio web. La información de tráfico también nos permite mejorar la experiencia global del usuario en nuestro sitio web. La información de tráfico de datos puede identificar a los visitantes individuales en combinación con la información personal proporcionada anteriormente.</p><p>Información de localización: Ciertas funciones de localización (por ejemplo, localizar la oficina de pago de DVNotes más cercana o la estación de GNC más cercana) disponibles en el sitio web de DVNotes son provistas por terceros. La utilización que usted haga de dicha función está sujeta a los términos y condiciones del tercero (y sus ocasionales enmiendas). Cuando un usuario utiliza tales servicios con la función de localización, DVNotes también puede recibir información sobre la ubicación actual del usuario, como señales GPS enviadas por un teléfono móvil o por medio de su dirección IP. Los servicios con funciones de localización también pueden utilizar diversas tecnologías para determinar la ubicación, tales como datos de sensores de su dispositivo que pudieran, por ejemplo, aportar información sobre la cercanía de puntos de acceso WiFi y antenas de red móvil. La información de localización ayuda a DVNotes a personalizar y diseñar servicios de acuerdo con sus necesidades. La información de localización puede identificar a usuarios individuales en combinación con la información personal brindada con anterioridad.</p><p class="center">II.  Divulgación de su información a terceros</p><p>DVNotes no divulgará, sin su consentimiento, ninguna información personal a terceros para sus propios fines comerciales, con excepción de que DVNotes puede divulgar su información personal a terceros, incluidas ciertas empresas afiliadas (en concordancia con las leyes y reglamentaciones pertinentes) u otras empresas confiables, únicamente con el fin de permitirles que brinden servicios a DVNotes relacionados con los fines comerciales propios de DVNotes (con sujeción a las obligaciones de confidencialidad y seguridad).</p><p>Cumplimiento de leyes y seguridad pública: DVNotes también puede divulgar información personal si considera, de buena fe, que tal divulgación es necesaria para cumplir con las leyes pertinentes, o para responder a citaciones u órdenes judiciales de las que haya sido notificada, o para proteger o defender los derechos, la propiedad y la seguridad de nuestros usuarios, de terceros o de nosotros mismos. Las autoridades judiciales o las agencias del orden público pueden exigir que DVNotes proporcione información personal a las autoridades gubernamentales que correspondan. Divulgaremos información personal a partir de la recepción de una citación u orden judicial para cooperar con una investigación de las fuerzas de orden público. DVNotes colabora plenamente con las agencias del orden público en la identificación de aquellos que utilizan nuestros servicios para actividades ilegales. DVNotes se reserva el derecho de informar a las agencias del orden público sobre cualquier actividad que, de buena fe, considere ilegal. Fusiones y adquisiciones: En caso de una fusión, consolidación, reorganización o venta o transferencia de todos o sustancialmente todos los activos o actividades comerciales de DVNotes, uno de los activos que normalmente se transferiría es la información que recopilamos de nuestros visitantes y clientes (incluida tanto la información personal como la información no personal). Sin embargo, el uso de esta información por parte de cualquier entidad sucesora seguiría estando sujeto a los términos de esta política, con sus eventuales enmiendas, incluidas todas las enmiendas posteriores a dicha transacción.</p><p class="center">III.  Prácticas sobre seguridad de la información</p><p>DVNotes realiza esfuerzos comercialmente razonables para prevenir que terceros adquieran, alteren o destruyan información puesta a disposición de DVNotes a través de este sitio web. Estos esfuerzos incluyen la supervisión del tráfico de la red con el fin de identificar intentos no autorizados de cargar (subir) o cambiar información; además, en algunas circunstancias, incluye la encriptación de la información confidencial utilizando capas de conexión segura (SSL, Secure Socket Layers) u otra tecnología similar. Este control también se realiza para evitar que se lleven a cabo actividades ilegales o que pudieran someter a DVNotes a responsabilidad civil o daños. DVNotes tiene el compromiso de mantener la seguridad del sitio web y el cumplimiento continuo de las leyes, de manera que este servicio permanezca disponible para todos los visitantes.Aunque DVNotes realiza esfuerzos comercialmente razonables para evitar que terceros no autorizados adquieran información personal enviada a DVNotes a través de este sitio web, la intercepción o adquisición ilícita por parte de un tercero sigue siendo posible.</p><p class="center">IV.  Niños</p><p>DVNotes no recopila, con conocimiento de causa, información personal de niños menores de 13 años de edad. Además, no tenemos conocimiento de ningún contenido en nuestro sitio web que pudiera considerarse perjudicial para los niños. Si DVNotes toma conocimiento de que ha recopilado información personal de niños menores de 13 años inadvertidamente, borraremos esa información de nuestros registros y cancelaremos la cuenta correspondiente.</p> <p class="center">V.  Enlaces</p><p>Este sitio web puede proporcionar enlaces a los sitios web o materiales de diversas asociaciones gubernamentales, industriales y terceros. Estos enlaces se proporcionan exclusivamente con fines informativos. DVNotes no avala ningún consejo, producto ni servicio que ofrezcan terceros. En la medida en que los materiales de terceros contengan afirmaciones de hecho, recomendaciones o cualquier otra interpretación o consejo, el tercero es el único responsable del contenido de su propio sitio y DVNotes no garantiza la precisión, integridad o idoneidad del mismo para ningún propósito o uso. Además, DVNotes no ha verificado las políticas de privacidad correspondientes a los sitios web de terceros ni los materiales ofrecidos por ellos, ni determinado las medidas que tomarán dichas partes en lo que respecta a la privacidad de sus visitantes. Por consiguiente, usted debe leer atentamente las políticas de privacidad de todos los sitios de terceros a los que tenga acceso desde cualquier sitio web de DVNotes. DVNotes no será responsable del contenido, las políticas o las acciones de terceros en ningún caso. DVNotes le invita a hacer preguntas y le recomienda que sea muy cuidadoso a la hora de divulgar su información personal a terceros.</p><p class="center">VI. Opciones en relación a la correspondencia promocional</p><p>Correos electrónicos promocionales: Usted contará con la opción de rechazar (opt out) los correos electrónicos promocionales de productos y/o servicios ofrecidos por DVNotes. Una vez que hayamos procesado su solicitud, dejaremos de enviarle, dentro de los plazos requeridos por la ley, correos electrónicos promocionales no transaccionales vinculados con productos y/o servicios que ofrezcamos, salvo que usted vuelva a suscribirse (opt in) para recibir dichas comunicaciones. Usted puede rechazar el envío de correos electrónicos promocionales no transaccionales, ya sea (a) siguiendo las instrucciones para cancelar su suscripción en el correo electrónico correspondiente que haya recibido de nosotros (si correspondiera), o (b) al llenar nuestro formulario electrónico en Internet (si correspondiera).</p><p>Mensajes operativos por correo electrónico: Independientemente de las opciones que tiene en relación con nuestros correos electrónicos promocionales no transaccionales, podremos continuar enviando correos electrónicos operativos para fines transaccionales o no promocionales, incluyendo, entre otros: facturación, conservación, gestión de cortes de servicio y seguridad.</p><p class="center">VII.  Enmiendas a esta política de privacidad</p><p>DVNotes se reserva el derecho, en cualquier momento y sin aviso previo, de agregar, cambiar, modificar o actualizar esta Política de Privacidad mediante la publicación de una política enmendada en este sitio web. Toda Política de Privacidad enmendada entrará en vigor inmediatamente después de su publicación. No obstante, siempre que esta política se actualice, se publicará la fecha de modificación.</p><p class="center">VIII.  Descargo de responsabilidad</p><p>DVNotes no se hace responsable de ninguna actividad ilícita en relación con este sitio web ni en caso de que un tercero obtenga una contraseña que se haya brindado a un usuario. En caso de que un usuario crea que una contraseña ha sido obtenida sin permiso por terceros o si un visitante tiene otras inquietudes relativas a la privacidad, debería ponerse inmediatamente en contacto con DVNotes para que podamos cambiar la contraseña o tomar las medidas pertinentes. Esta notificación debe enviarse a webmaster@DVNotes.com.</p><p class="center">IX.  Preguntas o comentarios</p><p>Si tiene alguna pregunta o comentario en relación con (a) la Política de Privacidad de nuestro sitio web, o (b) alguna otra pregunta sobre este sitio web, DVNotes o sus servicios, comuníquese con DVNotes por correo electrónico a webmaster@DVNotes.com</p><p>De todas maneras, tenga en cuenta que la información sobre estos contactos o la correspondencia con DVNotes posiblemente se conserve en un archivo que le corresponde exclusivamente a usted.</p><p>Por favor, vea también nuestro aviso de privacidad con respecto a la privacidad de la información de su uso de energía.</p><p class="center">Last Updated February 5, 2017</p>');
        }
    });
    $(this).toggleClass("active");
    return false;
    });
    ppcont.hide();  
});
