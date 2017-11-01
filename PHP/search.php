<?php
//header('Content-Type: application/xml');
    include('connection.php');
    
    if(!empty($_GET['post'])){
        $post = "AND postPermLink = '" . mysqli_real_escape_string($conn, $_GET['post']) . "' ";
    }else{
        $post = '';
    }
    if(!empty($_GET['author'])){
        $author = "AND steemName = '" . mysqli_real_escape_string($conn, $_GET['author']) . "' ";
    }else{
        $author = '';
    }
    if(!empty($_GET['tag'])){
        $tag = "AND tags LIKE '%" . mysqli_real_escape_string($conn, $_GET['tag']) . "%' ";
    }else{
        $tag = '';
    }
    if(!empty($_GET['editorsChoice'])){
        $editorsChoice = "AND editorsChoice = '" . mysqli_real_escape_string($conn, $_GET['editorsChoice']) . "' ";
    }else{
        $editorsChoice = '';
    }
    if(!empty($_GET['dateRange'])){
        date_default_timezone_set('UTC');
        $dateRange = mysqli_real_escape_string($conn, $_GET['dateRange']);
        $dates = explode("to", $dateRange);
        $startDate = strtotime($dates[0]);
        $startDate = date('Y-m-d', $startDate);
        $endDate = strtotime($dates[1]);
        $endDate = date('Y-m-d', $endDate);
        $dateRange = "AND postDate between '" . $startDate  . "' and '" . $endDate . "' ";
    }else{
        $dateRange = '';
    }
    //echo $dateRange;
    // Select all the rows in the markers table
    $sql    = "SELECT * FROM markerinfo WHERE lattitude != 0 AND longitude != 0  $post $author $tag $editorsChoice $dateRange";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        $doc     = new DOMDocument('1.0');
        $node    = $doc->createElement("markers");
        $parnode = $doc->appendChild($node);
        while ($row = $result->fetch_assoc()) {
            
            $node    = $doc->createElement("marker");
            $newnode = $parnode->appendChild($node);
            
            date_default_timezone_set('UTC');
            $postDate = date("M j, Y", strtotime($row['postDate'])); 
            
            $newnode->setAttribute("postLink", $row['postLink']);
            /*$newnode->setAttribute("steemName", $row['steemName']);
            $newnode->setAttribute("postTitle", $row['postTitle']);
            $newnode->setAttribute("postImageLink", $row['postImageLink']);
            $newnode->setAttribute("postUpvote", $row['postUpvote']);
            $newnode->setAttribute("postValue", $row['postValue']);*/
            $newnode->setAttribute("longitude", $row['longitude']);
            $newnode->setAttribute("lattitude", $row['lattitude']);
            /*$newnode->setAttribute("postDate", $postDate);
            $newnode->setAttribute("postDescription", $row['postDescription']);*/
        }
        
        $xmlfile = $doc->savexml();
        echo $xmlfile;
    } else {
        echo "nodata";
    }
?>
