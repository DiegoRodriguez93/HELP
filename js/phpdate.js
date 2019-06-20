let phpdate = `
<h4 class="text-danger">Fecha de hoy</h4>
<xmp>$date = date('Y-m-d');</xmp>
<h4 class="text-danger">Seleccionar timezone</h4>
<xmp>date_default_timezone_set('America/Argentina/Buenos_Aires');</xmp>
<h4 class="text-danger">Sumar días, meses o años a la fecha</h4>
<xmp>date("Y/m/d", strtotime($fecha_hoy . "+ 3 month"));</xmp>
<h4 class="text-danger">Date con días habiles</h4>
<xmp>//Date in YYYY-MM-DD format.
$date = date('Y-m-d');
 
//Set this to FALSE until proven otherwise.
$weekendDay = false;
 
//Get the day that this particular date falls on.
$day = date("D", strtotime($date));
 
//Check to see if it is equal to Sat or Sun.
if($day == 'Fri'){
    //Set our $weekendDay variable to TRUE.
    $weekendDay = true;
   $date = date("Y/m/d", strtotime($date . "+ 3 day"));
}else{
    $date = date("Y/m/d", strtotime($date . "+ 1 day")); 
}
 
//Output for testing purposes.
if($weekendDay){echo $date;}else{echo $date;}</xmp>

`;