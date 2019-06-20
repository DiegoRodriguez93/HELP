let datatable = `<h4 class="text-danger">HTML DATATABLA EXAMPLE</h4>
<xmp><table id="Jtabla" cellpadding="0" cellspacing="0" border="0" class="display">
<thead>
    <tr>
        <th width="12%" align="left">Cedula</th>
        <th width="12%" align="left">Nombre</th>
        <th width="12%" align="left">Filial</th>
        <th width="12%" align="left">Fecha Ingreso BPS</th>
    </tr>
</thead>
<tbody>
</tbody>
</table></xmp>
<h4 class="text-danger">JS DATATABLA EXAMPLE</h4>
<xmp>
window.onload = () =>
{listar_tabla();}
function listar_tabla()
{
var url="ajax/listar_comercial.php";
$("#Jtabla tbody").html("");
$.getJSON(url,function(servicios){
    $.each(servicios, function(i,servicios){

        var newRow =
        "<tr class='"+color+"' style='"+coloract+"'>"
        +"<td style='width:5%'>"+servicios.cedula+"</td>"
        +"<td style='width:15%'>"+servicios.nombre+"</td>"
        +"<td style='width:10%;'>"+servicios.filial+"</td>"
        +"</tr>";
        $(newRow).appendTo("#Jtabla tbody");
    });

    var table = $('#Jtabla').DataTable({
        lengthMenu: [10],
        searching: true,
        paging: true,
        lengthChange: false,
        ordering: true,
        info: true,
        order: [[ 7, 'desc' ], [ 10, 'asc' ]], // </xmp><h6 class="text-danger">CARGAR IDIOMA ESPAÑOL</h6> <xmp>
        oLanguage: {
            "sUrl": "json/traducciontabla.json"
        }, // </xmp><h6 class="text-danger">EJEMPLO DE BOTONES (HAY QUE CARGAR CDNS)</h6> <xmp>
        dom: 'Bfrtip', 
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print',{
                text: 'Agregar',
                action: function(){
                    agregarStock();
                }
            }
        ]
    
    } );
});   
}
</xmp>
<h4 class="text-danger">PHP ARRAY EXAMPLE</h4><xmp>
<?php
header('Content-Type: text/html; charset=utf-8');
include('../_conexion.php');
    $q = "SELECT
    u.id, u.ci_aco, u.fecha_entrega, a.ci, a.filial,
     a.fecha_ingreso, a.activo, a.fecha_notificacion, a.notificacion,
      u.uniforme, u.talle,a.nombre,u.vencimiento, u.modelo
    FROM uni_entregado AS u
    INNER JOIN acompanantes AS a ON  u.ci_aco = a.ci
    WHERE u.status = 1
    ;";

    $result = mysqli_query($mysqli,$q);

    // fecha de hoy
    $fecha_hoy = date('Y/m/d');
/*
    $fecha_vencimiento = new DateTime();
    $fecha_vencimiento->modify('+90 days');
    $fecha_vencimiento;

    $hoy = DateTime();
    echo "La diferencia en días es de:". $fecha_vencimiento->diff($hoy)->format('%d');
*/
 $servicios = array();
    while($row = mysqli_fetch_array($result)) {

        
        $vencido = FALSE;
        $id             = $row['id'];//
        $cedula         = $row['ci'];//
/*         $fecha_entrega  = new DateTime($row['fecha_entrega']); */
        $fecha_entrega  = $row['fecha_entrega'];
        $nombre         = $row['nombre'];//
        $filial         = $row['filial'];//
        $fecha_ingreso  = new DateTime($row['fecha_ingreso']);
        $fecha_ingreso  = $fecha_ingreso->format('Y/m/d');
        $activo         = $row['activo'];//
        $talle          = $row['talle'];//
        $uniforme       = $row['uniforme'];//
        $modelo         = $row['modelo'];//
        $vencimiento    = new DateTime($row['vencimiento']);
        $vencimiento    = $vencimiento->format('Y/m/d');
        $notificacion     = $row['notificacion'];//
        $fecha_notificacion = $row['fecha_notificacion'];//

        if($fecha_hoy >= $vencimiento){
            $vencido = TRUE;
        } 

        if(empty($modelo)){
            $modelo = '';
        }

        if(empty($fecha_entrega)){
            $fecha_entrega = '';
        }
    

        $servicios[] =  array('id'=> $id, 'cedula'=> $cedula, 'nombre'=> $nombre, 
        'filial'=> $filial,'fecha'=> $fecha_ingreso, 'fecha_entrega'=>$fecha_entrega,
        'talle'=>$talle,'uniforme'=>$uniforme,'vencimiento'=>$vencimiento,'vencido' => $vencido,
        'activo' => $activo,'notificacion' => $notificacion, 'modelo' => $modelo,
        'fecha_notificacion' => $fecha_notificacion );
         
        
        }

        //var_dump($servicios);


 echo json_encode( $servicios );
 mysqli_close($mysqli);
 ?>
</xmp><h4 class="text-danger">DESELECCIONAR LA ROW CON JQUERY</h4><XMP>
$('#mdlRenovar').on('hidden.bs.modal',function(){
    $('#Jtabla tr').removeClass("selected"); 
});
</XMP><h4 class="text-danger">EJEMPLO DE AJAX CON MODIFICACIÓN DINAMICA DE CAMPOS SIN LISTAR LA TABLA</h4>
<XMP>
$.ajax({
    url 	: 'php/extender.php',
    data 	: {id_extender:id,
        vencimiento_extender:vnc},
    method	: 'POST',
    dataType : 'json',
    success: function(content) {
       if(content.result){
           alert('Fecha Extendida hasta: '+content.fecha);
           var d = $('#Jtabla').DataTable().row('.selected').data(d);
           d[10] = content.fecha;
           d[7] = 'No';
           $('#Jtabla').DataTable().row('.selected').data(d);
           $('.selected').removeClass('colorcolor');       
           $("#mdlExtender").modal("hide");
           $('#vencimiento_extender').val('');

       }
    },
    error: function(error) {
        console.log(error);
         alert("Ha ocurrido un error, intentelo mas tarde.")
    }
 });
}else{
    alert('La fecha debe ser a futuro');
}
});
</XMP><h4 class="text-danger">EJEMPLO DE FUNCION RECIBIENDO PARAMENTRO DE DATATABLE</h4>
<XMP>
function Extender(id,vencimiento,nombre,row = 0){

    $("#id_extender").val(id);
    $('#comentario').val();   
    
    $('#show-fecha').html('Fecha de último vencimiento: '+vencimiento);
    $('#show-nombre').html('Nombre: '+nombre);

    // mostrar modal
    $("#mdlExtender").modal("show");

    $vencimiento = $('#vencimiento').val();

    if(row != 0){
        $('#Jtabla tr').removeClass("selected");
        row.addClass("selected");
    }
}
</XMP>
`;

