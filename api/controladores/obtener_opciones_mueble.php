<?php
    include_once("../helpers/utils.php");
    include_once("../modelos/catalogos.php");

    header("Content-Type: applicacion/json");
    header("Content-Type: applicacion/json");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Allow: GET, OPTIONS");

    es_metodo('GET'); // Si no es el metodo especificado, regresa un error

    $catalogos = new Catalogos();

    $tipos = $catalogos->obtener_tipos_mueble();
    $estilos = $catalogos->obtener_estilos_mueble();
    $materiales = $catalogos->obtener_materiales_mueble();

    echo json_encode(array(
        "tipos" => $tipos,
        "estilos" => $estilos,
        "materiales" => $materiales
    ));

    exit();
?>
