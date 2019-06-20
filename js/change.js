let change = `<h4 class="text-danger">PHP EXAMPLE</h4><xmp>
$q = 'SELECT * FROM stock ';
$condicion = false;
$where = ' WHERE ';

if(isset($_GET['filial_s']) AND $_GET['filial_s'] != '')
{
    $filial_s = $_GET['filial_s'];
    $condicion = true;
    $where .= " filial = '$filial_s' ";
}</xmp>
<H4 class="text-danger">JQUERY EXAMPLE</H4><XMP>
$('#filial_select').change(function(e)
{
    listar_stock()
});

var url_filial = "ajax/listar_select_filial.php";
    $.getJSON(url_filial,function(fi){
        $.each(fi, function(ind,fi){
            var filial = "<option value='"+fi.filial+"'>"+fi.filial+"</option>"; 
            $(filial).appendTo("#filial_select");
        });
    });

</XMP><h4 class="text-danger">JS EXAMPLE</h4><XMP>
if(tipo == '1' || tipo == '2' || tipo == '' ){
    $parametro = "?parametro="+tipo; 
}else{
    $parametro = "";
}

 var url= "ajax/listar_acompanantes.php"+$parametro ;
</XMP>`;