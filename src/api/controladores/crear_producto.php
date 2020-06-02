<?php
  include_once("../helpers/utils.php");
  include_once("../modelos/usuario.php");

  header("Content-Type: applicacion/json");
  es_metodo('POST');


  $credenciales = json_decode(file_get_contents('php://input'), true);

  if(empty( $credenciales["modelo"]) 
    || empty( $credenciales["precio"])
    || empty( $credenciales["desc"])
    || empty( $credenciales["activo"])
    || empty( $credenciales["tipo"])
    || empty( $credenciales["estilo"])
    || empty( $credenciales["material"])
    || empty( $credenciales["medidas"])
    || empty( $credenciales["existecias"])
    || empty( $credenciales["url"])) {
    http_response_code(400);
    echo json_encode([
        "codigo" => 400,
        "mensaje" => "Faltan parametros en la peticion."
    ]);
    exit();
}

$producto = new Producto();

$resultado = $producto->crear_producto(
    $credenciales["modelo"],
    $credenciales["precio"],
    $credenciales["desc"],
    $credenciales["activo"],
    $credenciales["tipo"],
    $credenciales["estilo"],
    $credenciales["material"],
    $credenciales["medidas"],
    $credenciales["existecias"],
    $credenciales["url"]);


?>

