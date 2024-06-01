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
        $sql = "SELECT * FROM  pets";
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
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO pets(id, genre, sexe ,age, description  ) VALUES(null, :genre ,:sexe, :age,:description)";
        $stmt = $conn->prepare($sql);
        // $created_at = date('Y-m-d');
        $stmt->bindParam(':genre', $user->genre);
        $stmt->bindParam(':sexe', $user->sexe);
        $stmt->bindParam(':age', $user->age);
        $stmt->bindParam(':description', $user->description);
       

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Pet created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create pet.'];
        }
        echo json_encode($response);
        break;
        case "DELETE": 
            $sql = "DELETE FROM pets WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Pet deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete pet.'];
            }
            echo json_encode($response);
            break;

}