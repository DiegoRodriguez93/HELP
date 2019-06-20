let array = `<h4 class="text-danger">EXAMPLE</h4>
<XMP>
    $ci_temporal = '';

    $query4 = mysqli_query($mysqli,"SELECT * FROM temp_aco");

    while($r1 = mysqli_fetch_array($query4)){
        $ci_ta              = $r1['ci'];
        $nombre_ta          = $r1['nombre'];
        $filial_ta          = $r1['filial'];
        $fecha_ingreso_ta   = $r1['fecha_ingreso'];
        $activo_ta          = $r1['activo'];
        $telefono_ta        = $r1['telefono'];

      $ci_temporal .= " '".$ci_ta."',";

    //INGRESO LAS NUEVAS ACOMPAÑANATES
    $query6 = mysqli_query($mysqli,"INSERT IGNORE INTO acompanantes 
    (nombre, ci, filial, fecha_ingreso, activo, telefono)
    VALUES ('$nombre_ta', '$ci_ta', '$filial_ta', '$fecha_ingreso_ta', '$activo_ta', '$telefono_ta') ");
    
    }
$ci_temp = mb_substr($ci_temporal, 0, -1);

$query7 = mysqli_query($mysqli,"UPDATE acompanantes SET activo = 'NO ACTIVO' WHERE ci NOT IN ($ci_temp) "); 
</XMP>

`;