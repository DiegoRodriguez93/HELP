<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="js/datatable.js"></script>
  <script src="js/phpdate.js"></script>
  <script src="js/change.js"></script>
  <script src="js/array.js"></script>
</head>
<body>
    <div class="container-fluid">
    <div class="row">
    <div class="col-2">
    <h3 class="text-center">Ayuda</h3>    
    
    <a id="dt_btn" class="btn btn-light btn-lg my-3 d-block">DataTable</a>
    <a id="phpdate_btn" class="btn btn-light btn-lg my-3 d-block">Dates PHP</a>
    <a id="change_btn" class="btn btn-light btn-lg my-3 d-block">Change PHP</a>
    <a id="array_btn" class="btn btn-light btn-lg my-3 d-block">Array from while var</a>

    </div>
    <div style="font-size:1.5em;" class="col-10 p-5">
    <div id="app"></div>
    </div>
    </div>
    </div>

<script>
$( document ).ready(function() {

    $('#dt_btn').click(function(){
        $('#app').html(datatable);
    });

    $('#phpdate_btn').click(function(){
        $('#app').html(phpdate);
    });

    $('#change_btn').click(function(){
        $('#app').html(change);
    });

    $('#array_btn').click(function(){
        $('#app').html(array);
    });
    
});
</script>


</body>
</html>