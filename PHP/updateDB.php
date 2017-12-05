

<?php


include('connection.php');

date_default_timezone_set('UTC');
$m_jsondata = file_get_contents('../DATA/data.json');
//convert json object to php associative array
$m_data     = json_decode($m_jsondata, true);

$markerId = $m_data['markers'];
/*

"id": "19473158",
      "steemName": "martibis",
      "latitude": -40.446947,
      "longitude": -145.546875,
      "postDescription": "",
      "postLink": "https://steemit.com/test/@martibis/testing",
      "postTitle": "Testing",
      "postPermLink": "testing",
      "postDate": "2017-12-04 01:00:00",
      "postTags": [
        "test"
      ],
      "postVotes": 2,
      "postComments": 2,
      "postValue": 0.818
*/

foreach ($markerId as $m_entity) {
    $postLink        = $m_entity['postLink'];
    $postLink        = mysqli_real_escape_string($conn, $postLink);
    $steemName       = $m_entity['steemName'];
    $steemName       = mysqli_real_escape_string($conn, $steemName);
    $postTitle       = $m_entity['postTitle'];
    $postTitle       = mysqli_real_escape_string($conn, $postTitle);
    $longitude       = $m_entity['longitude'];
    $longitude       = doubleval(mysqli_real_escape_string($conn, $longitude));
    $lattitude       = $m_entity['latitude'];
    $lattitude       = doubleval(mysqli_real_escape_string($conn, $lattitude));
    $postDescription = $m_entity['postDescription'];
    $postDescription = mysqli_real_escape_string($conn, $postDescription);
    $postPermLink    = $m_entity['postPermLink'];
    $postPermLink    = mysqli_real_escape_string($conn, $postPermLink);
    $postDate    = date($m_entity['postDate']);
    $postDate    = mysqli_real_escape_string($conn, $postDate);
    $tags = implode(',', $m_entity['postTags']);
    $tags    = mysqli_real_escape_string($conn, $tags);
    $postUpvote  = $m_entity['postVotes'];
    $postUpvote   = mysqli_real_escape_string($conn, $postUpvote);
    $postValue  = $m_entity['postValue'];
    $postValue   = mysqli_real_escape_string($conn, $postValue);
    $postImageLink    = isset($m_entity['postImageLink']) ? $m_entity['postImageLink'] : "No image";
    $postImageLink    = mysqli_real_escape_string($conn, $postImageLink);
    
    
    
    if($postValue < 0.001){
        $lattitude = 0;
        $longitude = 0;
    }
    
    if (is_double($longitude) and is_double($lattitude)) {
        $m_sql = "	INSERT INTO 
					markerinfo
					(postLink, steemName, postTitle, longitude, lattitude, postDescription, postPermLink, postDate, tags, postUpvote, postValue, postImageLink)
					VALUES
					('$postLink', '$steemName', '$postTitle', '$longitude', '$lattitude', '$postDescription', '$postPermLink', '$postDate', '$tags', '$postUpvote', '$postValue', '$postImageLink') ON DUPLICATE KEY UPDATE postTitle='$postTitle', longitude='$longitude', lattitude = '$lattitude', postDescription='$postDescription', tags='$tags', postUpvote='$postUpvote', postValue='$postValue', postImageLink='$postImageLink'";
        
        if ($conn->query($m_sql) === TRUE) {
            echo "New record created / updated successfully<br>";
        } else {
        	echo "Error: " . $m_sql . "<br>" . $conn->error;
        }
    }else{
    	echo "No legit long and / or lat value for " . $postLink . "</br>";
    }
}

$conn->close();

?>