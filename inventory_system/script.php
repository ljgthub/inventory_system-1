<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$db = "motorparts_inventory";

$conn = mysqli_connect($servername, $username, $password, $db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

function handleFileUpload($file){
    $imagePath = "uploads/" . basename($file['name']);
    if ($file['error'] !== UPLOAD_ERR_OK) {
        echo "File upload failed with error code: " . $file['error'];
        return false;
    }

    if (!file_exists('uploads')) {
        mkdir('uploads', 0777, true);
    }
    return move_uploaded_file($file['tmp_name'], $imagePath) ? $imagePath : false;
}

if (isset($_POST['insert'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $type = mysqli_real_escape_string($conn, $_POST['type']);
    $stock = (int)$_POST['stock'];
    $price = (float)$_POST['price'];

    $imagePath = handleFileUpload($_FILES['image']);
    if ($imagePath === false) {
        echo "Error uploading image!";
        return;
    }

    $insertData = "INSERT INTO items (name, type, stock, price, image_path) 
                   VALUES ('$name', '$type', $stock, $price, '$imagePath')";
    
    if (!mysqli_query($conn, $insertData)) {
        echo "Error executing query: " . mysqli_error($conn);
    } else {
        echo "Data inserted successfully!";
    }
}
?>
