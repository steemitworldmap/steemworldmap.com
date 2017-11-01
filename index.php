<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#">

<head>
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-105367484-1', 'auto');
        ga('send', 'pageview');

    </script>
    <link rel="shortcut icon" type="image/x-icon" href="IMG/favicon.ico">
    <link rel="image_src" type="image/png" href="IMG/maps1.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta property="og:url" content="http://www.steemitworldmap.com" />
    <meta property="og:title" content="Steemit Worldmap" />
    <meta property="og:image" content="http://www.steemitworldmap.com/IMG/maps1.png" />
    <meta property="og:description" content="Find and share blog posts with others from all over the world!" />
    <title>Steemit Worldmap</title>
    <meta name="description" content="Find and share blog posts with others from all over the world on the Steemit Worldmap!" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css">
    <link href="https://fonts.googleapis.com/css?family=Libre+Franklin|Dosis:400,700" rel="stylesheet">
    <link rel="stylesheet" tye="text/css" href="CSS/datepicker.css">
    <link rel="stylesheet" type="text/css" href="CSS/index.css">
    <style>
        /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
        
        #map {
            height: 100%;
        }
        /* Optional: Makes the sample page fill the window. */
        
        html,
        body {
            height: 100%;
            margin: 0;
            padding: 0;
        }

    </style>
</head>


<body>
    <?php 
    $post = isset($_GET['post']) ? $_GET['post'] : '';
    $author = isset($_GET['author']) ? $_GET['author'] : '';
    $tag = isset($_GET['tag']) ? $_GET['tag'] : '';
    $editorsChoice = isset($_GET['editorsChoice']) ? "checked" : '';
    $dateRange = isset($_GET['dateRange']) ? $_GET['dateRange'] : '';
    ?>
    <input id="pac-input" class="controls" type="text" placeholder="Search for a location">
    <div id="blogCodeDiv">
        <input id="blogCodeDescription" placeholder="Short description here" maxlength="250" />
        <p id="clickCodeText" class="blogCodeText">Click the code to copy, then add it to your post.</p>
        <p id="goodCopy" class="blogCodeText">Copied succesfully!</p>
        <p id="clickMapText" class="blogCodeText">Click on the map on the location of your post for the code to be generated.</p>
        <p id="codeToCopyText" class="blogCodeText"><span id="codeToCopy"></span></p>
    </div>
    <div class="onoffswitch">
        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch">
        <label class="onoffswitch-label" for="myonoffswitch">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>
    </div>
    <div id="donateButtons">
        <p id="donateText">Buy us a beer!</p>
        <p id="copiedMessage"></p>
        <img id="bcImg" src="IMG/bitcoin-min.png" alt="Copy bitcoin address">
        <img id="ethImg" src="IMG/ethereum-min.png" alt="Copy ethereum address">
        <a href="https://steemit.com/@steemitworldmap" target="_blank"><img id="steemImg" src="IMG/steem-min.png" alt="Copy steemname"></a>
        <a href="https://www.paypal.me/steemitworldmap" target="_blank"><img id="ppImg" src="IMG/paypal-min.png" alt="Send money through paypal"></a>
    </div>

    <div id="searchAndClear">
        <p id="howTo">FAQ</p>
        <p id="advancedSearch">Filter</p>
        <p id="clearSearch">Clear</p>
    </div>
    <div id="searchTerms">
        <form id="searchForm" name="form" method="get">
            <input id="postName" type="text" name="postName" value="<?php echo $post; ?>">
            <input id="author" type="text" name="author" placeholder="Author name" value="<?php echo $author; ?>"><br>
            <input id="tag" type="text" name="tag" placeholder="Tag (e.g.: travel)" value="<?php echo $tag; ?>"><br>
            <div id="dateRangeDiv">
                <input id="fromDate" name="fromDate" value="<?php echo $dateRange; ?>">
            </div>
            <input id="editorsChoice" type="checkbox" name="editorsChoice" value="1" <?php echo $editorsChoice; ?>>
            <label id="ecLabel" for="editorsChoice">Best Travel Posts Only</label>
        </form>
    </div>
    <div id="howToPopup">
        <h2 class="howToHeader">What is Steemit?</h2>
        <p class="howToText">Steemit is the blogging platform for which this web application was build.<br><br>Steemit uses blockchain technology to reward their users with the cryptocurrency STEEM. This can be sold on the free market for fiat, if you would be inclined to do so.<br><br>The dollar values shown here are the estimated worths of each post.<br><br><a href="https://steemit.com/pick_account" target="_blank">Want to join Steemit?</a> <a href="https://steemit.com/steemit/@mindover/steemit-for-dummies-like-me-everything-you-need-know-to-get-started" target="_blank">Or want to learn a bit more first?</a></p>
        <h2 class="howToHeader">How can I add my post to the map?</h2>
        <p class="howToText">Set the switch on the bottom of this page to code.<br>&#124;<br>Click on the map on the location of your post<br>(Zoom in to be more precise)<br>&#124;<br>Add a description about your post<br>&#124;<br>Click on the generated code to copy it to clipboard<br>&#124;<br>Paste the code in your Steemit post <br>&#124;<br>Congratulations, you have added your post to the map!
        </p>
    </div>
    <div id="map"></div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/moment@2.18.1/moment.min.js"></script>
    <script src="JS/datepicker.js"></script>
    <script src="JS/index.js"></script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDih2uRXCF2Z18UtMXhBWbKYtig8RP_X9M&callback=initMap&libraries=places"></script>
</body>

</html>
