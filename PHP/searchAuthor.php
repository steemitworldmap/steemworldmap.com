<?php
//header('Content-Type: application/xml');
if (!empty($_POST['author'])) {
    include('connection.php');
    
    $author = $_POST['author'];
    $author = $conn->real_escape_string($author);
    $xmlfile;
    
    // Select all the rows in the markers table
    $sql    = "SELECT * FROM markerinfo WHERE steemName = '$author' AND lattitude != 0";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        $doc     = new DOMDocument('1.0');
        $node    = $doc->createElement("markers");
        $parnode = $doc->appendChild($node);
        while ($row = $result->fetch_assoc()) {
            
            $node    = $doc->createElement("marker");
            $newnode = $parnode->appendChild($node);
            
            $postDate = date("M j, Y", strtotime($row['postDate'])); 
            
            $newnode->setAttribute("postLink", $row['postLink']);
            $newnode->setAttribute("steemName", $row['steemName']);
            $newnode->setAttribute("postTitle", $row['postTitle']);
            $newnode->setAttribute("postImageLink", "https://steemitimages.com/200x200/".$row['postImageLink']);
            $newnode->setAttribute("postUpvote", $row['postUpvote']);
            $newnode->setAttribute("postValue", $row['postValue']);
            $newnode->setAttribute("longitude", $row['longitude']);
            $newnode->setAttribute("lattitude", $row['lattitude']);
            $newnode->setAttribute("postDate", $postDate);
            $newnode->setAttribute("postDescription", $row['postDescription']);
        }
        
        $xmlfile = $doc->savexml();
        echo $xmlfile;
    } else {
        echo "nodata";
    }
}
else{
    if (!empty($_POST['post'])) {
    include('connection.php');
    
    $post = $_POST['post'];
    $post = $conn->real_escape_string($post);
    $xmlfile;
    
    // Select all the rows in the markers table
    $sql    = "SELECT * FROM markerinfo WHERE postPermLink = '$post' AND lattitude != 0";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        $doc     = new DOMDocument('1.0');
        $node    = $doc->createElement("markers");
        $parnode = $doc->appendChild($node);
        while ($row = $result->fetch_assoc()) {
            
            $node    = $doc->createElement("marker");
            $newnode = $parnode->appendChild($node);
            
            $postDate = date("M j, Y", strtotime($row['postDate'])); 
            
            $newnode->setAttribute("postLink", $row['postLink']);
            $newnode->setAttribute("steemName", $row['steemName']);
            $newnode->setAttribute("postTitle", $row['postTitle']);
            $newnode->setAttribute("postImageLink", "https://steemitimages.com/200x200/".$row['postImageLink']);
            $newnode->setAttribute("postUpvote", $row['postUpvote']);
            $newnode->setAttribute("postValue", $row['postValue']);
            $newnode->setAttribute("longitude", $row['longitude']);
            $newnode->setAttribute("lattitude", $row['lattitude']);
            $newnode->setAttribute("postDate", $postDate);
            $newnode->setAttribute("postDescription", $row['postDescription']);
        }
        
        $xmlfile = $doc->savexml();
        echo $xmlfile;
    } else {
        echo "nodata";
    }
}
    else{
include('connection.php');

// Select all the rows in the markers table
$sql    = "SELECT * FROM markerinfo WHERE lattitude != 0";
$result = $conn->query($sql);

$doc     = new DOMDocument('1.0');
$node    = $doc->createElement("markers");
$parnode = $doc->appendChild($node);

while ($row = $result->fetch_assoc()) {
    
    $node    = $doc->createElement("marker");
    $newnode = $parnode->appendChild($node);
    
    $postDate = date("M j, Y", strtotime($row['postDate'])); 
    
    $newnode->setAttribute("postLink", $row['postLink']);
    $newnode->setAttribute("steemName", $row['steemName']);
    $newnode->setAttribute("postTitle", $row['postTitle']);
    $newnode->setAttribute("postImageLink", "https://steemitimages.com/200x200/".$row['postImageLink']);
    $newnode->setAttribute("postUpvote", $row['postUpvote']);
    $newnode->setAttribute("postValue", $row['postValue']);
    $newnode->setAttribute("longitude", $row['longitude']);
    $newnode->setAttribute("lattitude", $row['lattitude']);
    $newnode->setAttribute("postDate", $postDate);
    $newnode->setAttribute("postDescription", $row['postDescription']);
}


$xmlfile = $doc->savexml();
echo $xmlfile;
}
}
?>
