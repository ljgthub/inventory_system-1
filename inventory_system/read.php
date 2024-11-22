<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "motorparts_inventory";

    $conn = mysqli_connect($servername, $username, $password, $db);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = "SELECT * FROM items";

    $result = mysqli_query($conn, $query);

    while($row = mysqli_fetch_assoc($result)) {
        $element = "";
        $element .= "<img src='" . $row['image_path'] . "' alt='' style='width: 120px; height: 90px;'>";
        $element .= "<p>ID: <span>" . $row['id'] . "</span></p>";
        $element .= "<p>Name: <span>" . $row['name'] . "</span></p>";
        $element .= "<p>Type: <span>" . $row['type'] . "</span></p>";
        $element .= "<p>Stock: <b><span>" . $row['stock'] . "</span></b></p>";
        $element .= "<p>Price: ₱<span>" . $row['price'] . "</span></p>";
        $element2 = "<div id='buttons'>
                        <button class='btn edit_btn'><i class='fa-solid fa-pen'></i></button>
                        <button class='btn delete_btn'><i class='fa-solid fa-trash'></i></button>
                    </div>";
        echo "<div class='item'>" . "<div class='item_content'>" . $element . "</div>" . $element2 . "</div>";
    }

    
?>

