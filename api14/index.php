<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "GET":
        $sql = "SELECT * FROM pets WHERE genre = 'Dog'";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $order = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO orders (nomComplet, email, adresse, telephone, idPet) VALUES (:nomComplet, :email, :adresse, :telephone, :idPet)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomComplet', $order->nomComplet);
        $stmt->bindParam(':email', $order->email);
        $stmt->bindParam(':adresse', $order->adresse);
        $stmt->bindParam(':telephone', $order->telephone);
        $stmt->bindParam(':idPet', $order->idPet);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Adoption request added successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to add adoption request.'];
        }
        echo json_encode($response);
        break;
}
?>
