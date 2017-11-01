<?php
header('Content-Type: application/xml');
include('connection.php');

// Select all the rows in the markers table
$sql    = "SELECT * FROM markerinfo WHERE postValue IS NOT NULL";
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
		$newnode->setAttribute("postImageLink", $row['postImageLink']);
		$newnode->setAttribute("postUpvote", $row['postUpvote']);
		$newnode->setAttribute("postValue", $row['postValue']);
		$newnode->setAttribute("longitude", $row['longitude']);
		$newnode->setAttribute("lattitude", $row['lattitude']);
		$newnode->setAttribute("postDate", $postDate);
		$newnode->setAttribute("postDescription", $row['postDescription']);
}


$xmlfile = $doc->savexml();
echo $xmlfile
?>