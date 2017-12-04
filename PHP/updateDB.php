

<?php


include('connection.php');

$m_jsondata = file_get_contents('../DATA/data.json');
//convert json object to php associative array
$m_data     = json_decode($m_jsondata, true);

$markerId = $m_data['markers'];

foreach ($markerId as $m_entity) {
    $postLink        = $m_entity['postLink'];
    $postLink        = mysqli_real_escape_string($conn, $postLink);
    $steemName       = $m_entity['steemName'];
    $steemName       = mysqli_real_escape_string($conn, $steemName);
    $postTitle       = $m_entity['postTitle'];
    $postTitle       = mysqli_real_escape_string($conn, $postTitle);
    $longitude       = $m_entity['longitude'];
    $longitude       = doubleval(mysqli_real_escape_string($conn, $longitude));
    $lattitude       = $m_entity['lattitude'];
    $lattitude       = doubleval(mysqli_real_escape_string($conn, $lattitude));
    $postDescription = $m_entity['postDescription'];
    $postDescription = mysqli_real_escape_string($conn, $postDescription);
    $postPermLink    = $m_entity['postPermLink'];
    $postPermLink    = mysqli_real_escape_string($conn, $postPermLink);
    
    $sqlPlink = "SELECT postPermLink FROM markerinfo WHERE postPermLink='$postPermLink'";
    $result = $conn->query($sqlPlink);
    $num = mysqli_num_rows($result);
    
    if (is_double($longitude) and is_double($lattitude) and $num == 0) {
        $m_sql = "	INSERT INTO 
					markerinfo
					(postLink, steemName, postTitle, longitude, lattitude, postDescription, postPermLink)
					VALUES
					('$postLink', '$steemName', '$postTitle', '$longitude', '$lattitude', '$postDescription', '$postPermLink') ON DUPLICATE KEY UPDATE postTitle='$postTitle', longitude='$longitude', lattitude = '$lattitude', postDescription='$postDescription'";
        
        if ($conn->query($m_sql) === TRUE) {
            echo "New record created successfully<br>";
        } else {
        	//echo "Duplicate";
            //echo "Error: " . $m_sql . "<br>" . $conn->error;
        }
    }else{
    	//echo "Duplicate";
    }
}

$conn->close();

?>