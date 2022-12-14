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
            title: '??xito',
            content: 'La nota se agreg?? correctamente.',
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
        closeIcon: 'Despu??s',
        buttons: {
            Aceptar: function(aceptar){
                let cuerpo1 = $('#nombb').val();
                // Validaci??nes si es string
                if(cuerpo1 != ""){
                    // Validaci??n si es numerico
                    if($.isNumeric(cuerpo1)){
                        $.confirm({
                        title: "Error!",
                        content: 'Debes ingresar un nombre valido.<br><br><input type="text" id="nombb" placeholder="Ingresar nombre">',
                        type: 'red',
                        confirmIcon: 'Aceptar',
                        closeIcon: 'Despu??s',
                        buttons: {
                            Aceptar: aceptar,
                            Despu??s: function(){
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
                        closeIcon: 'Despu??s',
                        buttons: {
                            Aceptar: aceptar,
                            Despu??s: function(){
                                $('#nomb').html("");
                            }
                        }
                    });
                }              
            },
            Despu??s: function(){
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
            title: '??xito',
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
        toscont.html('<h4 class="center" id="terminoss" >T??rminos y Condiciones de Uso</h4><p class="center">Derechos de autor y marcas registradas. Todo el contenido es propiedad de DaVinci Notes ?? 2000 - 2018. Todos los derechos de autor y marcas registradas reservados.</p><p class="center">Contenido</p><p>Todo texto, informaci??n, datos, fotograf??as, gr??ficos, c??digo html, software inform??tico, c??digo fuente y c??digo objeto, muestras de audio y video, marcas y logotipos, y similares (en adelante el "Contenido") que aparezcan en este sitio web optimizado para dispositivos m??viles, servicios de dispositivos m??viles o aplicaciones de dispositivos m??viles (en conjunto "Aplicaci??n M??vil") pertenecen a Gidoni IbarraGarc??a Fabeiro Company (en adelante la "Compa????a" o "Da Vinci Notes") o sus empresas afiliadas, licenciatarios o proveedores, salvo que quede expresamente especificado en esta Aplicaci??n M??vil. Los Usuarios (como se definen en el presente documento) s??lo pueden utilizar el Contenido en un dispositivo m??vil (por ejemplo, Apple iPhone o iPad, dispositivo Android o dispositivo m??vil con Microsoft Windows) que posean o controlen, y solamente por motivos personales, internos y sin fines comerciales. ????? 2018 Da Vinci Notes Todos los derechos reservados.??? Ning??n otro uso del Contenido, incluyendo, entre otras, cualquier clase de reedici??n del mismo, est?? permitido sin previa autorizaci??n por escrito otorgada por la Compa????a. Todo Usuario que haya violado comprobadamente la propiedad intelectual de un tercero mediante la retransmisi??n o publicaci??n de material vinculado con esta Aplicaci??n M??vil que infrinja los derechos de autor u otros derechos legales de dicho tercero ser?? excluido de esta Aplicaci??n M??vil.</p><p>Todas las marcas registradas utilizadas en esta Aplicaci??n M??vil son propiedad de la Compa????a o, en unos pocos casos, utilizadas con la autorizaci??n de sus respectivos titulares. Ning??n tercero puede utilizar ni reproducir ninguna marca registrada que incluya, entre otros, logotipos y dominios de Internet que utilicen las marcas registradas ???Da Vinci Notes???, ???Gidoni IbarraGarc??a Fabeiro??? o ???G I F??? (ya sea que se usen o no con letras may??sculas o espacios) sin el previo consentimiento por escrito de la Compa????a o del propietario de la marca registrada.</p><p>Aparte del derecho de uso no exclusivo, no sublicenciable, intransferible, personal y limitado de los Usuarios tal como se especifica en la presente, no se confiere ning??n derecho a dicho Contenido ni a porciones del mismo, sin importar la forma en que aparezca, mediante su inclusi??n en esta Aplicaci??n M??vil o mediante el acceso al mismo por parte del Usuario. Un Usuario no puede: (a) separar ning??n Contenido individual o componente de la Aplicaci??n M??vil para otro uso que el indicado en relaci??n a la Aplicaci??n M??vil; (b) incorporar una porci??n del mismo a los propios programas del Usuario o recopilar cualquier porci??n en combinaci??n con los propios programas del Usuario; (c) transferirlo para ser utilizado por otro servicio; o (d) vender, arrendar, ceder, prestar, distribuir, comunicar p??blicamente, transformar o sublicenciar la Aplicaci??n M??vil o conceder en modo alguno cualquier derecho a la Aplicaci??n M??vil absoluta o parcialmente. La Compa????a ser?? responsable de todo mantenimiento o soporte t??cnico de la Aplicaci??n M??vil; ning??n Tercero (como se define en el presente documento) ser?? responsable de brindar servicios de mantenimiento o soporte t??cnico para la Aplicaci??n M??vil.</p><p>La Compa????a se reserva el derecho de enmendar, complementar o suspender total o parcialmente la Aplicaci??n M??vil en forma ocasional. Asimismo, la Compa????a se reserva el derecho de cambiar los T??rminos y Condiciones en cualquier momento, con vigencia inmediata a partir del momento que se actualiza la Aplicaci??n M??vil. Los t??rminos ???Usuario??? y ???Usuarios??? se refieren a todo individuo o entidad que use, acceda, descargue, instale, obtenga o brinde informaci??n desde y hacia esta Aplicaci??n M??vil. Todas las referencias al plural en la presente incluir??n al singular y las referencias al singular incluir??n al plural salvo que se desprenda otra interpretaci??n del contexto.</p><p>Reclamos por violaci??n de derechos en la aplicaci??n m??vilEn caso de que un visitante crea que sus derechos de propiedad intelectual o marcas registradas puedan estar siendo violados por materiales publicados o almacenados en esta Aplicaci??n M??vil, deber?? completar la ???Notificaci??n de Violaci??n de Derechos??? del enlace y enviar un correo electr??nico a nuestro webmaster: webmaster@Da Vinci Notes.com con una copia de confirmaci??n enviada a:</p><ul><li>Gidoni IbarraGarc??a Fabeiro Company</li><li>Office of the General Counsel</li><li>Notice of Infringement</li><li>Av Santa Fe, 3400</li><li>CABA, Buenos Aires, Argentina</li></ul><p>Dicha Notificaci??n debe brindar la informaci??n requerida en cumplimiento de las cl??usulas aplicables de la Ley de derechos de autor para medios digitales en el nuevo milenio (Digital Millennium Copyright Act, DMCA), T??tulo 17 del C??digo de los Estados Unidos, Secci??n 517 (c)(3)(A) (y todas sus modificatorias). Tal como se prev?? en dicha Ley, toda notificaci??n que alegue la violaci??n de derechos que incumpla en forma sustancial con las cl??usulas antes se??aladas no ser?? considerada como prueba fehaciente de "conocimiento real" o una "certidumbre de hechos o circunstancias en las cuales se evidencie una acci??n de violaci??n de derechos". Por favor, env??e una Notificaci??n por separado para cada caso que desee informar como un caso supuesto de violaci??n de derechos de autor.</p><p>La Compa????a ha adoptado e implementado una pol??tica que prev?? la terminaci??n, en circunstancias apropiadas, de las cuentas de los Usuarios que son infractores reincidentes o que son acusados repetidamente de infracci??n.</p><p class="center">Uso</p><p>Al usar, acceder, descargar, instalar, obtener o brindar informaci??n desde y hacia esta Aplicaci??n M??vil, se considerar?? que los Usuarios han le??do y aceptado estos T??rminos y Condiciones (incluyendo nuestra Pol??tica de Privacidad), que se incorpora al presente documento en virtud de esta referencia. El uso de esta Aplicaci??n M??vil tambi??n estar?? sujeto a los T??rminos y Condiciones de Da Vinci Notes.com y, si correspondiera, a los T??rminos y Condiciones de My Account. Tenga presente que todas las referencias al "sitio web" en nuestra Pol??tica de Privacidad tambi??n se consideran v??lidas para esta Aplicaci??n M??vil, ya sea que se utilice en forma conjunta o independientemente del Sitio Web de la Compa????a en www.Da Vinci Notes.com.</p><p>Los Usuarios deben suspender el uso de esta Aplicaci??n M??vil inmediatamente si no est??n de acuerdo o no aceptan todos estos T??rminos y Condiciones. La Compa????a se reserva el derecho de eliminar o prohibir a cualquier Usuario la utilizaci??n de esta Aplicaci??n M??vil a su sola discreci??n.</p><p class="center">Cuentas de usuario</p><p>La Compa????a puede, a su sola discreci??n, brindar acceso a los Usuarios a porciones restringidas de esta Aplicaci??n M??vil, incluyendo, entre otros, una o m??s cuentas de Usuario donde pueda brindarse y/u obtenerse la informaci??n y servicios espec??ficos de los clientes.</p><p>Los Usuarios que entren a dichas ubicaciones podr??an estar sujetos a T??rminos y Condiciones adicionales seg??n se especifique en relaci??n a los servicios proporcionados. Los Usuarios con cuentas de servicio son responsables exclusivos de preservar la confidencialidad de toda informaci??n de acceso, la informaci??n de la cuenta del Usuario y todas las acciones u omisiones vinculadas con dicha cuenta.</p><p class="center">Env??o de contenidos</p><p>En caso de que un Usuario env??e im??genes digitales u otro contenido, incluidas todas las fotograf??as, ilustraciones, gr??ficos y texto (en forma conjunta, ???Materiales???) a la Compa????a a trav??s de la Aplicaci??n M??vil, tendr??n validez los siguientes t??rminos:</p><p>El Usuario solo podr?? enviar a la Compa????a, a trav??s de la Aplicaci??n M??vil, Materiales de los cuales posea todos los derechos de propiedad intelectual. Dicho de otro modo, si un Usuario env??a una imagen digital a la Compa????a, el Usuario debe poseer todos los derechos sobre dicha imagen o el Usuario debe tener la autorizaci??n de la persona propietaria de tales derechos. Los menores de edad no pueden enviar Materiales a la Compa????a a trav??s de la Aplicaci??n M??vil. Asimismo, un Usuario no puede enviar ninguna informaci??n susceptible de identificaci??n personal sobre un ni??o menor de 13 a??os de edad.</p><p>Por el presente el Usuario cede a la Compa????a los derechos y licencias mundiales, sin exclusividad, libres de regal??as y a perpetuidad para (a) reproducir, distribuir, transmitir, representar y exhibir p??blicamente los Materiales, total o parcialmente, de cualquier manera y en cualquier medio para transmitir informaci??n, existente en la actualidad o que se cree en el futuro (???Medios???), (b) modificar, adaptar, traducir y crear trabajos derivados de los Materiales, total o parcialmente, de cualquier manera y en cualesquiera Medios, y (c) otorgar sublicencias por los derechos antedichos, total o parcialmente, a terceros con o sin canon de concesi??n. Por el presente el Usuario otorga a la Compa????a y sus sublicenciatarios una licencia sin exclusividad, mundial y libre de regal??as para usar todas las marcas registradas, nombres comerciales y los nombres e im??genes de todo individuo que aparezca en los Materiales. El Usuario otorga a la Compa????a y sus sublicenciatarios el derecho a usar el nombre que el Usuario env??e en relaci??n con los Materiales.</p><p class="center">Terceros</p><p>Los prestadores de servicio de telefon??a inal??mbrica de los Usuarios, los fabricantes y vendedores de los dispositivos m??viles en los que el Usuario descargue, instale, utilice o acceda a la Aplicaci??n M??vil, el creador del sistema operativo para los dispositivos m??viles de los Usuarios y el operador de cualquier tienda de aplicaciones o servicios similares mediante los cuales los usuarios obtengan la Aplicaci??n M??vil, si existieran, (en conjunto, los ???Terceros???) no son parte de estos T??rminos y Condiciones y no son propietarios ni responsables de la Aplicaci??n M??vil. Los Terceros no brindan ninguna garant??a en relaci??n con la Aplicaci??n M??vil. No son responsables del mantenimiento u otros servicios de soporte t??cnico de la Aplicaci??n M??vil y no ser??n responsables ante ning??n otro reclamo, p??rdidas, imputaci??n de responsabilidades, da??os y perjuicios, costos o gastos vinculados con la Aplicaci??n M??vil.</p><p>Los Usuarios reconocen y aceptan que los Terceros y sus empresas subsidiarias son terceros beneficiarios de estos T??rminos y Condiciones y que ellos tienen el derecho (y se asumir?? que han aceptado tal derecho) de ejercer estos T??rminos y Condiciones ante los usuarios como terceros beneficiarios.</p><p>La Aplicaci??n M??vil fue creada para la versi??n m??s reciente disponible en el mercado de los sistemas operativos de los dispositivos m??viles de los Usuarios y pueden surgir inconvenientes de compatibilidad cuando se utilicen versiones anteriores. La cobertura de la red inal??mbrica y la velocidad de la red de Wi-Fi var??an seg??n el proveedor y la ubicaci??n geogr??fica. La Compa????a no se responsabiliza por las limitaciones y/o fallas en el funcionamiento de ning??n servicio inal??mbrico o Wi-FI que se use para acceder a esta Aplicaci??n M??vil ni por la seguridad de los servicios inal??mbricos o Wi-Fi. Asimismo, la Compa????a no se responsabiliza de los cargos o tarifas por uso de redes de datos, que son exclusiva responsabilidad del Usuario.</p><p class="center">Actualizaciones de la aplicaci??n m??vil</p><p>La Compa????a puede solicitar a los Usuarios que actualicen su versi??n de la Aplicaci??n M??vil en cualquier momento. Aunque se har??n todos los esfuerzos por conservar las configuraciones y preferencias personales de los Usuarios, seguir?? existiendo la posibilidad de que las mismas se pierdan.</p><p class="center">Problemas de cobertura inal??mbrica y desactivaci??n de funciones</p><p>Al intentar realizar una transacci??n en la Aplicaci??n M??vil, es posible que la conexi??n inal??mbrica se interrumpa o que se desactive una funci??n. En caso de que esto ocurriera, los Usuarios deber??n verificar el estado de la transacci??n que se haya intentado realizar apenas ingresen a un ??rea con cobertura inal??mbrica o tengan acceso a una computadora. Los Usuarios tambi??n pueden ponerse en contacto con un representante de servicio al cliente de Da Vinci Notes a trav??s del enlace ???Cont??ctenos??? que se brinda a continuaci??n:</p><p class="center">Usuarios finales del gobierno de los Estados Unidos de Am??rica</p><p>Todo software inform??tico que sea parte de la Aplicaci??n M??vil y est?? disponible para descarga o uso es un ???Elemento Comercial??? como se define en la ?? 2.101 del t??tulo 48 del C??digo Federal de Regulaciones (C.F.R.) compuesto por ???software inform??tico comercial??? y ???documentaci??n de software inform??tico comercial???, como se definen los t??rminos la ?? 12.212 del t??tulo 48 del C??digo Federal de Regulaciones (C.F.R.) o la ?? 227.7202 del t??tulo 48 del C??digo Federal de Regulaciones (C.F.R.), seg??n corresponda. En consonancia con estas cl??usulas, dicho software inform??tico es cedido con licencia a los usuarios finales del Gobierno de los Estados Unidos de Am??rica (a) solo como un Elemento Comercial, y (b) solo con aquellos derechos que se conceden al resto de los usuarios finales en cumplimiento con estos T??rminos y Condiciones. Los derechos no publicados son derechos reservados conforme a las leyes sobre derechos de autor de los EE. UU. de Am??rica.</p><p class="center">Responsabilidad limitada</p><p>LOS TERCEROS, LA COMPA????A Y SUS EMPRESAS MATRICES Y AFILIADAS, JUNTO CON LOS RESPECTIVOS DIRECTIVOS, DIRECTORES, PERSONAL, EMPLEADOS Y REPRESENTANTES (EN CONJUNTO REFERIDOS COMO LAS ???PARTES EXENTAS???) NO SER??N RESPONSABLES NI ESTAR??N SUJETOS A ACCIONES LEGALES, Y POR LA PRESENTE EL USUARIO RENUNCIA A TODO RECLAMO, DEMANDA, IMPUTACI??N DE RESPONSABILIDADES, CAUSA LEGAL, QUERELLA, RECLAMACI??N DE DA??OS Y PERJUICIOS, POR RAZ??N DE, ENTRE OTROS, DA??OS DIRECTOS, INDIRECTOS, ACCIDENTALES, INCIDENTALES, DERIVADOS, CIRCUNSTANCIALES, EXTRAORDINARIOS, ESPECIALES O PUNITIVOS DE CUALQUIER NATURALEZA CON RESPECTO A ESTA APLICACI??N M??VIL (INCLUYENDO LOS PRODUCTOS, SERVICIOS Y CONTENIDOS DE LAS PARTES EXENTAS), A??N CUANDO LAS PARTES EXENTAS HUBIERAN SIDO ADVERTIDAS DE LA POSIBILIDAD DE DICHOS DA??OS. EL ??NICO RECURSO DE LOS USUARIOS ANTE TALES RECLAMOS, DEMANDAS, IMPUTACI??N DE RESPONSABILIDADES, CAUSAS LEGALES, QUERELLAS O RECLAMOS DE DA??OS Y PERJUICIOS ES PONER FIN AL USO DE ESTA APLICACI??N M??VIL.</p><p class="center">Privacidad</p><p>Nuestra pol??tica de privacidad en relaci??n a cualquier informaci??n obtenida por la Compa????a a trav??s de esta Aplicaci??n M??vil puede consultarse en la secci??n Pol??tica de Privacidad del Sitio Web de la Compa????a. Pueden tener validez algunas reglas adicionales en materia de privacidad seg??n se establece en las funciones de esta Aplicaci??n M??vil restringidas para servicios espec??ficos del Usuario.</p><p>El uso de esta Aplicaci??n M??vil implica la transmisi??n electr??nica de informaci??n a trav??s de las redes del proveedor de servicio inal??mbrico. En vista de que la Compa????a no opera ni controla las redes inal??mbricas utilizadas para acceder a la Aplicaci??n M??vil, la Compa????a no es responsable de la privacidad o seguridad de las transmisiones inal??mbricas de datos. Los Usuarios deber??n utilizar proveedores de servicios acreditados y verificar junto a su proveedor de servicios inal??mbricos la informaci??n relativa a sus pr??cticas en materia de privacidad y seguridad.</p><p class="center">Patrocinio</p><p>La Compa????a no recomienda, patrocina ni promociona negocios, servicios o productos de terceros, a excepci??n de manifestaciones de recomendaci??n o patrocinio que la Compa????a realice de manera expresa, si las hubiere, en esta Aplicaci??n M??vil. Si esta Aplicaci??n M??vil proporciona informaci??n sobre terceros o proporciona contenido de terceros, e incluso enlaces a sitios web de terceros, la Compa????a no ser?? responsable de ning??n da??o o perjuicio relacionado con cualquier informaci??n de terceros, aunque ??sta contenga errores o equivocaciones. Asimismo, la Compa????a no ser?? responsable ni estar?? sujeta a acci??n legal por los servicios o productos de terceros. Consulte tambi??n la secci??n en materia de enlaces de nuestra Pol??tica de privacidad, incluido el descargo de responsabilidad por los contendidos de terceros.</p><p class="center">Exclusi??n de garant??a</p><p>LAS PARTES EXENTAS NO HACEN MANIFESTACI??N ALGUNA EN CUANTO A LA FUNCIONALIDAD Y USO DEL CONTENIDO DE ESTA APLICACI??N M??VIL. EL USO Y NAVEGACI??N QUE HAGA EL USUARIO CON ESTA APLICACI??N M??VIL ES A RIESGO EXCLUSIVO DEL PROPIO USUARIO. TODA LA INFORMACI??N CONTENIDA EN ESTA APLICACI??N M??VIL ES PROPORCIONADA "TAL COMO EST????? Y ???SEG??N EST?? DISPONIBLE???, SIN ASEVERACIONES NI GARANT??AS, YA SEAN EXPRESAS O T??CITAS. LOS USUARIOS NO DEBEN ASUMIR QUE LA INFORMACI??N INCLUIDA EN ESTA APLICACI??N M??VIL SE ACTUALIZA CONSTANTEMENTE NI QUE INCLUYE INFORMACI??N RECIENTE.</p><p>ESTA APLICACI??N M??VIL PODR?? DEJAR DE FUNCIONAR, SER INTERRUMPIDA O FUNCIONAR INDEBIDAMENTE DE FORMA OCASIONAL. LAS PARTES EXENTAS NO TIENEN RESPONSABILIDAD POR DICHO CESE DE FUNCIONAMIENTO, INTERRUPCI??N O FUNCIONAMIENTO INDEBIDO. LOS USUARIOS QUEDAN ADVERTIDOS DE QUE LA INFORMACI??N CONTENIDA AQU?? PODR??A CONTENER ERRORES T??CNICOS, INEXACTITUDES, ERRORES DE PROGRAMACI??N, VIRUS DESCONOCIDOS Y OMISIONES. EL USUARIO ASUME TODOS LOS RIESGOS VINCULADOS CON EL USO DE ESTA APLICACI??N M??VIL, Y ACEPTA QUE LA COMPA????A RENUNCIA A TODA GARANT??A VINCULADA AL USO DE LA APLICACI??N M??VIL POR PARTE DEL USUARIO.</p><p>SIN PERJUICIO DE LO DISPUESTO EN CUALQUIER OTRA CL??USULA DE ESTOS T??RMINOS Y CONDICIONES, LA COMPA????A RECHAZA TODA MANIFESTACI??N O GARANT??A, YA SEA EXPRESA O T??CITA, DE TODO TIPO EN REFERENCIA A ESTA APLICACI??N M??VIL (INCLUYENDO NUESTROS PRODUCTOS, SERVICIOS Y CONTENIDO DEL SITIO) INCLUIDAS, ENTRE OTRAS, LAS GARANT??AS DE COMERCIABILIDAD Y APTITUD PARA UN PROP??SITO EN PARTICULAR, DE GOCE PAC??FICO, T??TULO, NO VIOLACI??N DE LOS DERECHOS DE TERCEROS Y PRECISI??N. NINGUNA INFORMACI??N O ASESORAMIENTO ORAL O ESCRITO DADO POR NOSOTROS O NUESTROS REPRESENTANTES AUTORIZADOS CREAR?? UNA GARANT??A NI AUMENTAR?? DE NINGUNA FORMA EL ALCANCE DE NUESTRAS OBLIGACIONES TAL CUAL SE ESTABLECEN EN ESTOS T??RMINOS Y CONDICIONES.</p><p class="center">Exoneraci??n</p><p>Los Usuarios liberar??n de toda responsabilidad y exonerar??n a las Partes Exentas de todo reclamo, demanda, responsabilidad civil, causa legal, querella o da??os y perjuicios (incluidos los honorarios y los gastos razonables de abogados) que surjan como consecuencia del uso que dichos Usuarios hagan de la Aplicaci??n M??vil (incluidos nuestros productos, servicios y Contenido), incluyendo, entre otros, la informaci??n, contenido o entrega incorrectos de la Aplicaci??n M??vil, o de los productos y servicios de la Compa????a o de terceros. La Compa????a se reserva el derecho, por cuenta propia, de asumir la defensa y el control exclusivos de cualquier asunto sujeto a exoneraci??n por parte de los Usuarios, pero el hacerlo no exime a los Usuarios de sus obligaciones de exoneraci??n.</p><p class="center">Restricciones a la exportaci??n</p><p>Esta Aplicaci??n M??vil o su tecnolog??a subyacente no pueden ser descargadas, exportadas ni reexportadas: a) a Cuba, Ir??n, Corea del Norte, Sud??n, Siria ni a ning??n otro pa??s sujeto a medidas de embargo por parte de los EE. UU. (ni a un residente o ciudadano de estos pa??ses); (b) a cualquier persona que est?? en la lista de Nacionales Especialmente Designados (Specially Designated Nationals) por el Departamento del Tesoro de los EE. UU. o en la lista de Personas F??sicas o Jur??dicas Denegadas (Denied Party or Entity List) del Departamento de Comercio de los EE. UU., y (c) a cualquier pa??s, persona, usuario final o entidad prohibidos conforme a las leyes de exportaci??n de los EE. UU.</p><p class="center">Funciones de localizaci??n disponibles</p><p>Ciertas funciones de localizaci??n (por ejemplo, localizar la oficina de pago de la Compa????a m??s cercana o la estaci??n de GNC m??s cercana) disponibles en la Aplicaci??n M??vil son provistas por terceros. El uso que hagan los usuarios de esa funcionalidad est?? sujeta a los t??rminos y condiciones del tercero (y a sus actualizaciones ocasionales). Los usuarios deben utilizar su propio juicio sobre la adecuaci??n e idoneidad de la informaci??n. Toda la informaci??n de localizaci??n es brindada por completo en las condiciones en que se encuentra, sin garant??as de ninguna naturaleza.</p><p class="center">Resoluci??n de disputas</p><p class="center">Acuerdo sobre el arbitraje de disputas</p><p>MEDIANTE EL USO, ACCESO, DESCARGA, INSTALACI??N, OBTENCI??N O PROVISI??N DE INFORMACI??N DESDE Y HACIA ESTA APLICACI??N M??VIL, LOS USUARIOS ACUERDAN EXPRESAMENTE QUE TODO RECLAMO, DISPUTA O CONTROVERSIA DE ??NDOLE LEGAL ENTRE LOS USUARIOS Y LA COMPA????A QUE SURJAN SURGIDOS O EST??N VINCULADOS DE CUALQUIER MODO CON LA APLICACI??N M??VIL, INCLUIDAS LAS CONTROVERSIAS VINCULADAS CON LA APLICABILIDAD, ALCANCE O VALIDEZ DE CUALQUIERA DE LAS CL??USULAS DE ESTOS T??RMINOS Y CONDICIONES O DE NUESTRA POL??TICA DE PRIVACIDAD (EN FORMA CONJUNTA, ???DISPUTAS???) SER??N RESUELTAS DE ACUERDO CON LOS PROCEDIMIENTOS AQU?? ESTABLECIDOS. CUALQUIERA DE LAS PARTES PUEDE PRESENTAR UN RECLAMO CONTRA LA COMPA????A HACIENDO CLIC AQU??. EN CASO DE QUE EL RECLAMO NO SE RESUELVA INFORMALMENTE, EL USUARIO ACEPTA POR LA PRESENTE RESOLVER TODAS LAS DISPUTAS MEDIANTE ARBITRAJE VINCULANTE CONFIDENCIAL, SALVO POR LA ??NICA EXCEPCI??N QUE SE ESTABLECE M??S ADELANTE. TODAS LAS DISPUTAS SER??N RESUELTAS POR UN ??RBITRO, QUE SER?? UN ??RBITRO NEUTRAL DESIGNADO POR ACUERDO DE AMBAS PARTES DE LA DISPUTA. EN CASO DE QUE LAS PARTES NO LOGREN ACORDAR UN ??RBITRO NEUTRAL LUEGO DE SESENTA (60) D??AS, JAMS SELECCIONAR?? EL ??RBITRO NEUTRAL PARA RESOLVER LA DISPUTA. LA COMPA????A CUBRIR?? LOS COSTOS DEL ??RBITRO SELECCIONADO POR MEDIO DE ESTE PROCEDIMIENTO DE ACUERDO MUTUO PARA TODOS LOS RECLAMOS DE NATURALEZA NO FR??VOLA. EL ARBITRAJE SE CELEBRAR?? DE ACUERDO A LAS REGLAS Y PROCEDIMIENTOS INTEGRALES DE ARBITRAJE DE JAMS, PUBLICADOS ENWWW.JAMSADR.COM. LOS USUARIOS ACEPTAN ESPEC??FICAMENTE QUE EST??N OBLIGADOS A RESOLVER TODAS LAS DISPUTAS MEDIANTE ARBITRAJE, INCLUYENDO, ENTRE OTROS, LA CAPACIDAD DE HACER VALER ESTE ACUERDO DE ARBITRAJE, SALVO QUE DECIDAN INICIAR UNA ACCI??N LEGAL EN UN JUZGADO DE DEMANDAS DE MENOR CUANT??A COMO SE ESTABLECE M??S ADELANTE. Cada una de las partes acepta pagar los honorarios y gastos de sus propios abogados. Asimismo, el Usuario y la Compa????a aceptan que para todo reclamo por da??os de menos de $10,000, el arbitraje puede realizarse a criterio del demandante solamente bas??ndose en presentaciones escritas. El Usuario y la Compa????a tambi??n aceptan que para toda disputa de menos de $10,000, el cliente de la compa????a de servicios p??blicos puede optar por presentar dicho reclamo en un juzgado de demandas de menor cuant??a del condado en que el cliente tenga domicilio de facturaci??n, y para todos los otros casos en un juzgado de demandas de menor cuant??a de Los Angeles, California. Si la disputa es presentada por un cliente de servicios p??blicos de la Compa????a, el arbitraje se celebrar?? en el condado donde el usuario tenga domicilio de facturaci??n. Si la disputa es presentada por cualquier otra parte, el arbitraje deber?? celebrarse en Los Angeles, California. El ??rbitro tiene la potestad de otorgar un interdicto judicial, pero no tiene la potestad de conceder da??os punitivos. La disputa se regir?? por las leyes de California, sin perjuicio de conflicto con las cl??usulas de la ley.</p><p class="center">Renuncia a arbitraje colectivo</p><p>En la medida que la plena aplicaci??n de las leyes lo permita, todas las Disputas se resolver??n por arbitraje vinculante confidencial en forma individual seg??n la capacidad individual de cada parte, y no como parte integrante de una supuesta demanda colectiva de ninguna acci??n legal colectiva. El ??rbitro no tiene la capacidad legal de resolver m??s que el reclamo de una sola persona, y de ninguna manera puede dirimir ninguna forma de acci??n legal representativa o colectiva. Los Usuarios aceptan expresamente que ninguna otra Disputa ser?? unificada ni anexada a su Disputa, ya sea mediante acciones legales de arbitraje colectivo u otros procedimientos. Mediante el uso, acceso, descarga, instalaci??n, obtenci??n o provisi??n de informaci??n desde o hacia esta Aplicaci??n M??vil, los Usuarios aceptan que renuncian en forma voluntaria y deliberada a cualquier derecho a participar como representante o miembro de cualquier grupo o colectivo de demandantes de cualquier Disputa.</p><p class="center">Cumplimiento de la decisi??n del arbitraje</p><p>La decisi??n del ??rbitro ser?? final y vinculante para todas las partes sujetas a estos T??rminos y Condiciones, y puede ser aplicada como precedente en cualquier juzgado de jurisdicci??n competente.</p><p class="center">Divisibilidad</p><p>Si cualquier cl??usula de estos T??rminos y Condiciones resultara inv??lida, nula o inaplicable, las cl??usulas restantes conservar??n de todos modos su total validez y la cl??usula inv??lida, nula o inaplicable ser?? considerada como modificada de modo tal que sea v??lida y aplicable hasta el m??ximo alcance permitido por la ley.</p><p class="center">T??rminos adicionales para dispositivos Apple</p><p>Esta secci??n se aplica exclusivamente a los Usuarios que utilicen la Aplicaci??n M??vil en un dispositivo Apple (por ejemplo, iPhone, iPad, iPod Touch) (en adelante, denominados ???Dispositivo Apple???). La Compa????a solamente es responsable de la Aplicaci??n M??vil que usted utiliza en su Dispositivo Apple, y los Usuarios pueden utilizar la Aplicaci??n M??vil en su Dispositivo Apple solamente como se permite en estos T??rminos y Condiciones y en las ???Normas de uso??? establecidas en los T??rminos y Condiciones de la Tienda de Aplicaciones (http://www.apple.com/legal/itunes/appstore/us/terms.html). En relaci??n con el deslinde de responsabilidades entre la Compa????a y Apple Inc., en la medida en que: (a) la Compa????a debe atender todo reclamo vinculado con el uso o posesi??n por parte del Usuario o de un tercero de la Aplicaci??n M??vil en el Dispositivo Apple del Usuario, y la compa????a ser?? responsable de atender, investigar o defender el reclamo; y (b) la Compa????a no ha renunciado efectivamente a ninguna garant??a vinculada con la Aplicaci??n M??vil en el Dispositivo Apple del Usuario, se desprende que la Compa????a ser?? responsable exclusiva en relaci??n con cualquier garant??a del producto u otros reclamos, p??rdidas, imputaci??n de responsabilidades, da??os y perjuicios, costos o gastos si la Aplicaci??n M??vil no se ajusta a ninguna de las garant??as. Si la Aplicaci??n M??vil en el Dispositivo Apple del Usuario no se ajusta a ninguna de las garant??as pertinentes, el Usuario puede solicitar a Apple Inc. un reembolso por la suma de la compra de la Aplicaci??n M??vil en el Dispositivo Apple del Usuario, si la hubiera. Apple Inc. no tendr?? obligaciones de garant??a de ninguna otra naturaleza con respecto a la Aplicaci??n M??vil en el Dispositivo Apple del Usuario. Apple Inc. y sus filiales son terceros exentos de estos T??rminos y Condiciones, y Apple Inc. y sus filiales pueden hacer valer estos T??rminos y Condiciones contra los Usuarios en calidad de terceros exentos de estos T??rminos y Condiciones.</p><p class="center">Idioma prevaleciente</p><p>En el caso de que existiera alguna inconsistencia, ambig??edad o conflicto entre la versi??n en ingl??s de estos T??rminos y Condiciones y las traducidas a otros idiomas, la versi??n en ingl??s prevalecer?? sobre el resto.</p><p class="center">Preguntas y comentarios</p><p>Los Usuarios que tengan alguna pregunta o duda sobre los T??rminos y Condiciones para Aplicaciones M??viles pueden ponerse en contacto con el webmaster en relaci??n con esta Aplicaci??n M??vil escribiendo al siguiente correo electr??nico: ??? webmaster@Da Vinci Notes.com. Los Usuarios tambi??n pueden enviar sus preguntas y comentarios por correo postal:</p><p class="center">Da Vinci Notes</p><p>Webmaster - Da Vinci Notes Internet Web Site</p><p>Av. Santa Fe X</p><p>CABA, Buenos Aires, Argentina</p>');
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
        ppcont.html('<h4 class="center" id="polipriv">Politica de Privacidad</h4><p class="center">Gidoni IbarraGarc??a Fabeiro (??DVNotes??) asume el compromiso de mantener informadas a las personas que nos visitan respecto de la manera en que utilizamos la informaci??n que recopilamos en nuestro sitio web, en nuestro sitio web optimizado para tel??fonos m??viles y en nuestras aplicaciones para tel??fonos m??viles (denominados conjuntamente, el ???sitio web???). Al utilizar nuestro sitio web u obtener cualquier producto o servicio a trav??s del mismo, usted autoriza a que recopilemos y utilicemos la informaci??n seg??n lo establecido en la presente pol??tica. Si no est?? de acuerdo con esta pol??tica, por favor no utilice el sitio web.</p><p>Tenga en cuenta que otros sitios accesibles a trav??s del sitio web de DVNotes tienen sus propias pol??ticas de privacidad y pr??cticas de recopilaci??n, uso y divulgaci??n de datos. Las pr??cticas de informaci??n de estos otros sitios vinculados al sitio web de DVNotes no est??n cubiertas por esta pol??tica de privacidad.</p><p class="center">I. Informaci??n que recopilamos y c??mo la usamos</p><p>Con el fin de brindarle mejores productos y servicios, el sitio web de DVNotes recopila dos tipos de informaci??n: informaci??n personal e informaci??n no personal.</p><p>Informaci??n personal: La "informaci??n personal" se refiere a aquella informaci??n que nos permite conocer los detalles espec??ficos de qui??n es usted y puede utilizarse para identificarlo, ponerse en contacto con usted o localizarlo. Usted puede optar por no brindar ning??n tipo de informaci??n personal y, a??n as??, podr?? tener acceso a la mayor??a de las secciones del sitio web. Sin embargo, se puede recopilar cierta informaci??n personal de los visitantes que buscan obtener los servicios que ofrece DVNotes en este sitio web, como:</p><p>Inscripci??n en My Account y uso de My Account;Solicitudes de empleo;Inscripci??n en el programa CARE u otros programas de asistencia al cliente;Uso de aplicaciones m??viles de DVNotes;Solicitudes para participar en programas, descuentos e incentivos de eficiencia energ??tica; y Solicitud de inclusi??n en listas de correo, correos electr??nicos, mensajes de texto, tel??fonos fijos o celulares de DVNotes, como se describe m??s detalladamente en algunas secciones de este sitio web. Asimismo, las comunicaciones en l??nea que se relacionan con servicios p??blicos tambi??n pueden requerir contactos de seguimiento (como correos electr??nicos, mensajes de texto y llamadas en respuesta a una solicitud) y respuestas sobre los servicios que se desean utilizar, incluidos los servicios de facturaci??n y pago.</p><p>Entre los ejemplos de la informaci??n personal que usted puede enviar se incluyen su nombre o, al combinarse con su nombre u otra informaci??n que razonablemente pudiese ser utilizada para identificarlo a usted, su domicilio postal, n??mero de tel??fono, n??mero de celular, direcci??n de correo electr??nico y cualquier otra informaci??n de identificaci??n y contacto. Tambi??n es posible que recopilemos cierta informaci??n de su cuenta bancaria (si usted decide proporcionarla), as?? como otros tipos de informaci??n que usted pueda haber ingresado al presentar una solicitud de empleo. En caso de que presente una solicitud para el programa CARE, es posible que tambi??n se le pida que divulgue su inscripci??n en otros programas del gobierno (como los cupones para alimentos/ Programa SNAP, el Ingreso Suplementario del Seguro Social y el Programa National de Almuerzos Escolares o "National School Lunch").</p><p>DVNotes utiliza esta informaci??n personal para brindar servicios, desempe??ar sus actividades comerciales y mejorar la experiencia de los visitantes de nuestro sitio web.</p><p>Informaci??n no personal: ???Informaci??n no personal??? se refiere a la informaci??n que no identifica a un individuo en particular por s?? sola ni en combinaci??n con otra informaci??n no personal. DVNotes puede recopilar informaci??n no personal utilizando cookies, agentes o a trav??s de la recopilaci??n de datos de tr??fico e informaci??n sobre la ubicaci??n.</p><p>Cookies: El sitio web de DVNotes puede almacenar cookies en su computadora u otros dispositivos para permitirnos monitorear el uso que haga del sitio web. No se intenta conocer la identidad de los usuarios individuales, a menos que se tomen medidas para la identificaci??n del visitante por medio de un procedimiento de ???aceptaci??n expl??cita a participar??? (opt in), cuando por ejemplo:</p><p>Se soliciten servicios individuales;Se presente una solicitud de empleo;Se solicite quedar incluido en una lista de correo de DVNotes; Se sospeche de una conducta il??cita o de actividades no autorizadas Se requiera la identificaci??n del usuario conforme la ley. Las cookies se utilizan para mejorar la utilidad de nuestro sitio web en beneficio de nuestros visitantes.</p><p>Agentes: Tambi??n podemos trabajar eventualmente con proveedores de servicios o soluciones inform??ticas ajenos a nuestra empresa que empleen "agentes" para monitorear, rastrear y analizar el comportamiento y el tr??fico de datos del usuario en sus dispositivos y en este sitio web. La informaci??n recogida por dichos agentes puede incluir, entre otros: modelo del dispositivo, identificadores ??nicos de dispositivos ((UDID, por sus siglas en ingl??s), informaci??n de la red m??vil, incluido el n??mero de tel??fono celular, versi??n del agente, plataforma, versi??n SDK, fecha de registro (timestamp), clave API (identificador de aplicaci??n), versi??n de la aplicaci??n, modelo, fabricante y versi??n de sistema operativo del dispositivo o del hardware, hora de inicio/finalizaci??n de la sesi??n, ubicaci??n, huso horario y tipo de red (WiFi, etc.) La informaci??n que se recopila a trav??s de los agentes se utiliza para personalizar los servicios y mejorar la funcionabilidad del sitio web. La informaci??n que se recopila a trav??s de los agentes puede identificar a usuarios individuales en combinaci??n con la informaci??n personal que se haya proporcionado con anterioridad.</p><p>Informaci??n de tr??fico: DVNotes recopila y mantiene, autom??ticamente, informaci??n estad??stica de los registros de datos de nuestro sitio web relativos a la actividad, la navegaci??n, el volumen y el flujo de tr??fico en la red del sitio web ("informaci??n de tr??fico"). Los siguientes son algunos ejemplos de informaci??n de tr??fico:</p><p>Nombre del dominio o URL a trav??s del cual el visitante accede a Internet (por ejemplo, "compa????aXYZ.com", "universidadXYZ.edu" u "organismoXYZ.gov"); N??mero de protocolo de Internet (IP); Tipo de navegador web utilizado; Paginas web visitadas; y Fecha y hora de visita al sitio web.</p> <p>Nuestro prop??sito principal al recopilar informaci??n de tr??fico es optimizar la utilidad del servicio que brindamos a los visitantes de nuestro sitio web. La informaci??n de tr??fico tambi??n nos permite mejorar la experiencia global del usuario en nuestro sitio web. La informaci??n de tr??fico de datos puede identificar a los visitantes individuales en combinaci??n con la informaci??n personal proporcionada anteriormente.</p><p>Informaci??n de localizaci??n: Ciertas funciones de localizaci??n (por ejemplo, localizar la oficina de pago de DVNotes m??s cercana o la estaci??n de GNC m??s cercana) disponibles en el sitio web de DVNotes son provistas por terceros. La utilizaci??n que usted haga de dicha funci??n est?? sujeta a los t??rminos y condiciones del tercero (y sus ocasionales enmiendas). Cuando un usuario utiliza tales servicios con la funci??n de localizaci??n, DVNotes tambi??n puede recibir informaci??n sobre la ubicaci??n actual del usuario, como se??ales GPS enviadas por un tel??fono m??vil o por medio de su direcci??n IP. Los servicios con funciones de localizaci??n tambi??n pueden utilizar diversas tecnolog??as para determinar la ubicaci??n, tales como datos de sensores de su dispositivo que pudieran, por ejemplo, aportar informaci??n sobre la cercan??a de puntos de acceso WiFi y antenas de red m??vil. La informaci??n de localizaci??n ayuda a DVNotes a personalizar y dise??ar servicios de acuerdo con sus necesidades. La informaci??n de localizaci??n puede identificar a usuarios individuales en combinaci??n con la informaci??n personal brindada con anterioridad.</p><p class="center">II.  Divulgaci??n de su informaci??n a terceros</p><p>DVNotes no divulgar??, sin su consentimiento, ninguna informaci??n personal a terceros para sus propios fines comerciales, con excepci??n de que DVNotes puede divulgar su informaci??n personal a terceros, incluidas ciertas empresas afiliadas (en concordancia con las leyes y reglamentaciones pertinentes) u otras empresas confiables, ??nicamente con el fin de permitirles que brinden servicios a DVNotes relacionados con los fines comerciales propios de DVNotes (con sujeci??n a las obligaciones de confidencialidad y seguridad).</p><p>Cumplimiento de leyes y seguridad p??blica: DVNotes tambi??n puede divulgar informaci??n personal si considera, de buena fe, que tal divulgaci??n es necesaria para cumplir con las leyes pertinentes, o para responder a citaciones u ??rdenes judiciales de las que haya sido notificada, o para proteger o defender los derechos, la propiedad y la seguridad de nuestros usuarios, de terceros o de nosotros mismos. Las autoridades judiciales o las agencias del orden p??blico pueden exigir que DVNotes proporcione informaci??n personal a las autoridades gubernamentales que correspondan. Divulgaremos informaci??n personal a partir de la recepci??n de una citaci??n u orden judicial para cooperar con una investigaci??n de las fuerzas de orden p??blico. DVNotes colabora plenamente con las agencias del orden p??blico en la identificaci??n de aquellos que utilizan nuestros servicios para actividades ilegales. DVNotes se reserva el derecho de informar a las agencias del orden p??blico sobre cualquier actividad que, de buena fe, considere ilegal. Fusiones y adquisiciones: En caso de una fusi??n, consolidaci??n, reorganizaci??n o venta o transferencia de todos o sustancialmente todos los activos o actividades comerciales de DVNotes, uno de los activos que normalmente se transferir??a es la informaci??n que recopilamos de nuestros visitantes y clientes (incluida tanto la informaci??n personal como la informaci??n no personal). Sin embargo, el uso de esta informaci??n por parte de cualquier entidad sucesora seguir??a estando sujeto a los t??rminos de esta pol??tica, con sus eventuales enmiendas, incluidas todas las enmiendas posteriores a dicha transacci??n.</p><p class="center">III.  Pr??cticas sobre seguridad de la informaci??n</p><p>DVNotes realiza esfuerzos comercialmente razonables para prevenir que terceros adquieran, alteren o destruyan informaci??n puesta a disposici??n de DVNotes a trav??s de este sitio web. Estos esfuerzos incluyen la supervisi??n del tr??fico de la red con el fin de identificar intentos no autorizados de cargar (subir) o cambiar informaci??n; adem??s, en algunas circunstancias, incluye la encriptaci??n de la informaci??n confidencial utilizando capas de conexi??n segura (SSL, Secure Socket Layers) u otra tecnolog??a similar. Este control tambi??n se realiza para evitar que se lleven a cabo actividades ilegales o que pudieran someter a DVNotes a responsabilidad civil o da??os. DVNotes tiene el compromiso de mantener la seguridad del sitio web y el cumplimiento continuo de las leyes, de manera que este servicio permanezca disponible para todos los visitantes.Aunque DVNotes realiza esfuerzos comercialmente razonables para evitar que terceros no autorizados adquieran informaci??n personal enviada a DVNotes a trav??s de este sitio web, la intercepci??n o adquisici??n il??cita por parte de un tercero sigue siendo posible.</p><p class="center">IV.  Ni??os</p><p>DVNotes no recopila, con conocimiento de causa, informaci??n personal de ni??os menores de 13 a??os de edad. Adem??s, no tenemos conocimiento de ning??n contenido en nuestro sitio web que pudiera considerarse perjudicial para los ni??os. Si DVNotes toma conocimiento de que ha recopilado informaci??n personal de ni??os menores de 13 a??os inadvertidamente, borraremos esa informaci??n de nuestros registros y cancelaremos la cuenta correspondiente.</p> <p class="center">V.  Enlaces</p><p>Este sitio web puede proporcionar enlaces a los sitios web o materiales de diversas asociaciones gubernamentales, industriales y terceros. Estos enlaces se proporcionan exclusivamente con fines informativos. DVNotes no avala ning??n consejo, producto ni servicio que ofrezcan terceros. En la medida en que los materiales de terceros contengan afirmaciones de hecho, recomendaciones o cualquier otra interpretaci??n o consejo, el tercero es el ??nico responsable del contenido de su propio sitio y DVNotes no garantiza la precisi??n, integridad o idoneidad del mismo para ning??n prop??sito o uso. Adem??s, DVNotes no ha verificado las pol??ticas de privacidad correspondientes a los sitios web de terceros ni los materiales ofrecidos por ellos, ni determinado las medidas que tomar??n dichas partes en lo que respecta a la privacidad de sus visitantes. Por consiguiente, usted debe leer atentamente las pol??ticas de privacidad de todos los sitios de terceros a los que tenga acceso desde cualquier sitio web de DVNotes. DVNotes no ser?? responsable del contenido, las pol??ticas o las acciones de terceros en ning??n caso. DVNotes le invita a hacer preguntas y le recomienda que sea muy cuidadoso a la hora de divulgar su informaci??n personal a terceros.</p><p class="center">VI. Opciones en relaci??n a la correspondencia promocional</p><p>Correos electr??nicos promocionales: Usted contar?? con la opci??n de rechazar (opt out) los correos electr??nicos promocionales de productos y/o servicios ofrecidos por DVNotes. Una vez que hayamos procesado su solicitud, dejaremos de enviarle, dentro de los plazos requeridos por la ley, correos electr??nicos promocionales no transaccionales vinculados con productos y/o servicios que ofrezcamos, salvo que usted vuelva a suscribirse (opt in) para recibir dichas comunicaciones. Usted puede rechazar el env??o de correos electr??nicos promocionales no transaccionales, ya sea (a) siguiendo las instrucciones para cancelar su suscripci??n en el correo electr??nico correspondiente que haya recibido de nosotros (si correspondiera), o (b) al llenar nuestro formulario electr??nico en Internet (si correspondiera).</p><p>Mensajes operativos por correo electr??nico: Independientemente de las opciones que tiene en relaci??n con nuestros correos electr??nicos promocionales no transaccionales, podremos continuar enviando correos electr??nicos operativos para fines transaccionales o no promocionales, incluyendo, entre otros: facturaci??n, conservaci??n, gesti??n de cortes de servicio y seguridad.</p><p class="center">VII.  Enmiendas a esta pol??tica de privacidad</p><p>DVNotes se reserva el derecho, en cualquier momento y sin aviso previo, de agregar, cambiar, modificar o actualizar esta Pol??tica de Privacidad mediante la publicaci??n de una pol??tica enmendada en este sitio web. Toda Pol??tica de Privacidad enmendada entrar?? en vigor inmediatamente despu??s de su publicaci??n. No obstante, siempre que esta pol??tica se actualice, se publicar?? la fecha de modificaci??n.</p><p class="center">VIII.  Descargo de responsabilidad</p><p>DVNotes no se hace responsable de ninguna actividad il??cita en relaci??n con este sitio web ni en caso de que un tercero obtenga una contrase??a que se haya brindado a un usuario. En caso de que un usuario crea que una contrase??a ha sido obtenida sin permiso por terceros o si un visitante tiene otras inquietudes relativas a la privacidad, deber??a ponerse inmediatamente en contacto con DVNotes para que podamos cambiar la contrase??a o tomar las medidas pertinentes. Esta notificaci??n debe enviarse a webmaster@DVNotes.com.</p><p class="center">IX.  Preguntas o comentarios</p><p>Si tiene alguna pregunta o comentario en relaci??n con (a) la Pol??tica de Privacidad de nuestro sitio web, o (b) alguna otra pregunta sobre este sitio web, DVNotes o sus servicios, comun??quese con DVNotes por correo electr??nico a webmaster@DVNotes.com</p><p>De todas maneras, tenga en cuenta que la informaci??n sobre estos contactos o la correspondencia con DVNotes posiblemente se conserve en un archivo que le corresponde exclusivamente a usted.</p><p>Por favor, vea tambi??n nuestro aviso de privacidad con respecto a la privacidad de la informaci??n de su uso de energ??a.</p><p class="center">Last Updated February 5, 2017</p>');
        }
    });
    $(this).toggleClass("active");
    return false;
    });
    ppcont.hide();  
});
