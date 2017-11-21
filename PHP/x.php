<?php

	include('connection.php');
	 
	date_default_timezone_set('UTC');
	$curationwindow = date("Y-m-d H:m:s", strtotime('-7 day', time())); // Curation Window = 7 Days period
		
	$sql = "SELECT * FROM markerinfo WHERE postDate >= '$curationwindow' OR postDate IS NULL";
	$result = $conn->query($sql);

	while ($row = $result->fetch_assoc()) {

	    $permLink 			= $row['postPermLink'];
	    $author 			= $row['steemName'];
	    $timestamp			= $row['postDate'];
		
	    echo "<br/><br/>".$permLink." by ".$author."<br/>";
	      
	    if($permLink != ""){
			$account 			= call1($author,$permLink);
		
			$upvotes 			= $account['net_votes'];
			$pendingpayoutvalue = $account['pending_payout_value'];
			$tpendingpayoutvalue= $account['total_pending_payout_value'];
			$pendingpayoutvalue = trim(str_replace("SBD", "", $pendingpayoutvalue));

			if($pendingpayoutvalue == 0 || $pendingpayoutvalue == ""){
				$pendingpayoutvalue	= $account['total_payout_value'];
				$pendingpayoutvalue = trim(str_replace("SBD", "", $pendingpayoutvalue));
			}
			
			$comments 			= $account['children'];
			$title 				= $account['title'];
			$parent_permlink 	= $account['parent_permlink'];
			$body 				= $account['body'];
			
			$imageLink			= $account['json_metadata'];
			
			$tags 				= explode('"tags":[', $imageLink);
			$tagsB 			    = explode(']', $tags[1]);
			$tags 			    = $tagsB[0];
				
			$image 				= explode('"image":["', $imageLink);
			$imageB 			= explode('"', $image[1]);
			$imageF 			= $imageB[0];
			
			if(($account['created'] != "" && $timestamp == "") || ($account['created'] != "" && $timestamp == "0000-00-00 00:00:00")){
				$timestamp 		= date("Y-m-d H:i:s", strtotime($account['created']));
			}
			
			$bodyA 		= explode("!steemitworldmap",$body);

			$latA 		= preg_split("/lat/i", $bodyA[1]);
			$lat 		= $latA[0];
		
			$longA 		= preg_split("/long/i", $latA[1]);
			$long 		= $longA[0];
			
			$descA 		= preg_split("/d3scr/i", $longA[1]);
			$desc 		= $descA[0]; 
			
			$title = str_replace('"',"'",$title);		
			$lat = str_replace(' ',"",$lat);
			$long = str_replace(' ',"",$long);	
			$lat = floatval($lat);
			$long = floatval($long);		
		
			$m_sql = " UPDATE 
						markerinfo
					   SET 
						postUpvote 		= '$upvotes',
						postValue 		= '$pendingpayoutvalue',
						postImageLink 	= '$imageF',
						postDate		= '$timestamp',
						lattitude		= '$lat',
						longitude		= '$long',
						tags		    = '$tags',
						postDescription	= ".'"'.$desc.'"'.",
						postTitle		= ".'"'.$title.'"'."
					   WHERE
						postPermLink 	= '$permLink'
					  ";
		 	
			if ($conn->query($m_sql) === TRUE) {
				echo "Record updated successfully<br>";
			} else {
				echo "Error: " . $m_sql . "<br>" . $conn->error;
			}
	    
	    }
		

	}
	
	function call1($author,$permLink) {
		$response = curl('{"jsonrpc": "2.0", "method": "get_content", "params" : ["'.$author.'","'.$permLink.'"], "id": 1}');
	    if (array_key_exists('error', $response)) {
	        var_dump($response['error']);
	        die();
	    }
	    return $response['result'];
	}

	function curl($data) {
	    global $debug;
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, 'https://steemd.minnowsupportproject.org');
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	    $result = curl_exec($ch);
	    
	    $err = curl_error($ch);
	    if ($err) {
	      echo "cURL Error #:" . $err;
	    } else {
	      //echo $result;
	    }

	    $result = json_decode($result, true);
	    return $result;
	}

?>
