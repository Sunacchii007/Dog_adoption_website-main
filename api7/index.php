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
        $sql = "SELECT * FROM  donations";
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
        $sql = "INSERT INTO donations ( firstName, lastName ,email ,donationAmount, cardNumber,message ) VALUES( :firstName ,:lastName, :email,:donationAmount,:cardNumber,:message )";
        $stmt = $conn->prepare($sql);
        // $created_at = date('Y-m-d');
        $stmt->bindParam(':firstName', $user->firstName);
        $stmt->bindParam(':lastName', $user->lastName);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':donationAmount', $user->donationAmount);
        $stmt->bindParam(':cardNumber', $user->cardNumber);
        $stmt->bindParam(':message', $user->message);
        var_dump($user);
       

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Donation added successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to send this donation.'];
        }
        echo json_encode($response);
        break;
        case "DELETE": 
            $sql = "DELETE FROM donations WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'donation deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete this donation.'];
            }
            echo json_encode($response);
            break;

}