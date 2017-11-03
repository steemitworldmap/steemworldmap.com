<?php   
        $conn = mysqli_connect($_ENV["MYSQL_HOST"], $_ENV["MYSQL_USERNAME"], $_ENV["MYSQL_PASSWORD"], $_ENV["MYSQL_DATABASE"])
        or die('Error connecting to MySQL server.');
?>