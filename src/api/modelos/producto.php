<?php 
    include_once("../helpers/mysql_helper.php");

    class Producto {
        private $pdo;

        function __construct() {
            $this->pdo = conectar();
        }
        
        function obtener_productos($filtro) {

            $sql = "SELECT DESCRIPCION as title, PRECIO as price, IMG_URL as url FROM MUEBLE ";

            if($filtro["filter"] == 1) {
                $sql = $sql."WHERE ID_TIPO = {$filtro["q"]}";
            } else {
                $sql = $sql."WHERE ID_ESTILO = {$filtro["q"]}";
            }

            $query = $this->pdo->prepare($sql);

            $query->execute();

            return $query->fetchAll(PDO::FETCH_ASSOC);
        }

        function crear_producto($modelo, $precio,$desc,$activo,$tipo,$estilo,$material,$medidas,$existecias,$url){
            $sql="INSERT INTO MUEBLE
            (MODELO, PRECIO, DESCRIPCION, ACTIVO, ID_TIPO, ID_ESTILO, ID_MEDIDAS, ID_MATERIAL, EXISTENCIAS, IMG_URL)
            VALUES('', $modelo ,  $precio,  $desc,  $activo,  $tipo, $estilo, $material, $medidad, $existencias,$url);
            "
            
            $query = $this->pdo->prepare($sql);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>