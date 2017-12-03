var map;
var markerArray = [];
var markerCluster;
var infowindow;
var codeMarker;
var selected;
var markerLatLng;
var clusterClicked;
var mapClicked;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: 17,
            lng: 0
        },
        minZoom: 2,
        clickableIcons: false
    });

    markerCluster = new MarkerClusterer(map, markerArray, {
        zoomOnClick: false,
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    /* originalOnAdd = ClusterIcon.prototype.onAdd;
     ClusterIcon.prototype.onAdd = function () {
         originalOnAdd.call(this);

         google.maps.event.addDomListener(this.div_, 'click', function (ev) {
             ev.returnValue = false;
             ev.cancelBubble = true

             if (ev.stopPropagation)
                 ev.stopPropagation();
         });

     }*/

    codeMarker = new google.maps.Marker();

    infoWindow = new google.maps.InfoWindow( /*{disableAutoPan: true}*/ );

    google.maps.InfoWindow.prototype.isOpen = function () {
        var map = this.getMap();
        return (map !== null && typeof map !== "undefined");
    }

    map.addListener('zoom_changed', function () {
        infoWindow.close();
    });

    mapClicked = google.maps.event.addListener(map, 'click', function (e) {
        setTimeout(function () {
            if (infoWindow.isOpen() && !clusterClicked) {
                infoWindow.close();
                //alert("triggered");
            }
            clusterClicked = false;
        }, 0);
    });

    map.addListener('idle', function () {
        $(".postImg").each(function () {
            var attr = $(this).attr('src');
            if ($(this).visible(true) && (attr == undefined || attr == false)) {
                var imageSrc = $(this).data('src');
                $(this).attr('src', imageSrc);
                $(this).on('load', function () {
                    $(this).parent().css('background', 'transparent');
                    $(this).fadeTo(500, 1);
                });
                $(this).on('error', function () {
                    $(this).parent().css('background', 'transparent');
                    $(this).attr("src", "/IMG/imageNotFound.png");
                    $(this).addClass("noImage");
                });
            }
        });
    });
    var options = {
        types: ['geocode']
    };

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.Autocomplete(input, options);
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('place_changed', function () {
        selected = true;
        var place = searchBox.getPlace();
        if (place.length == 0) {
            return;
        }

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        //places.forEach(function (place) {
        if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
        }

        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
        //});
        map.fitBounds(bounds);
    });
    google.maps.event.addListener(infoWindow, 'domready', function () {
        $(".infoDivCluster") //the root of the content
            .closest('.gm-style-iw')
            .parent().addClass('custom-iw');
    });

    var theClickEvent;
    var codeLong;
    var codeLat;
    var theDescription;
    var completeCode;
    $("#myonoffswitch").bind("input propertychange change", function (evt) {
        infoWindow.close();
        if ($("#myonoffswitch").prop('checked')) {
            $("#blogCodeDiv").fadeIn(300);
            for (var i = 0, n = markerArray.length; i < n; ++i) {
                markerArray[i].setVisible(false);
            }
            markerCluster.clearMarkers();
            markerCluster.repaint();

            $("#advancedSearch").stop().fadeOut(300);
            $("#clearSearch").stop().fadeOut(300);
            $("#howTo").stop().fadeOut(300).fadeIn(300);

            google.maps.event.removeListener(mapClicked);
            mapClicked = google.maps.event.addListener(map, 'click', function (e) {
                //Determine the location where the user has clicked.
                codeMarker.setMap(null);
                var location = e.latLng;

                //Create a marker and placed it on the map.
                codeMarker = new google.maps.Marker({
                    position: location,
                    map: map
                });
                codeLong = codeMarker.getPosition().lng();
                codeLat = codeMarker.getPosition().lat();
                theDescription = $("#blogCodeDescription").val();
                completeCode = "[//]:# (!steemitworldmap " + codeLat.toFixed(6) + " lat " + codeLong.toFixed(6) + " long " + theDescription + " d3scr)";
                $("#codeToCopy").empty().append(completeCode);
                $("#blogCodeDescription").bind("input propertychange", function (evt) {
                    // If it's the propertychange event, make sure it's the value that changed.
                    if (window.event && event.type == "propertychange" && event.propertyName != "value")
                        return;

                    // Clear any previously set timer before setting a fresh one
                    window.clearTimeout($(this).data("timeout"));
                    $(this).data("timeout", setTimeout(function () {
                        theDescription = $("#blogCodeDescription").val();
                        completeCode = "[//]:# (!steemitworldmap " + codeLat.toFixed(6) + " lat " + codeLong.toFixed(6) + " long " + theDescription + " d3scr)";
                        $("#codeToCopy").empty().append(completeCode);
                    }, 500));
                });
                $("#goodCopy").hide();
                $("#clickMapText").hide();
                $("#clickCodeText").show();
                $("#codeToCopy").show();
            });

        } else {
            google.maps.event.removeListener(mapClicked);
            mapClicked = google.maps.event.addListener(map, 'click', function (e) {
                setTimeout(function () {
                    if (infoWindow.isOpen() && !clusterClicked) {
                        infoWindow.close();
                        //alert("triggered");
                    }
                    clusterClicked = false;
                }, 0);
            });

            $("#howToPopup").stop().fadeOut(300, function () {
                $(".howToText").hide();
            });
            $("#blogCodeDiv").stop().fadeOut(300, function () {
                $("#blogCodeDescription").val('');
                $("#goodCopy").hide();
                $("#clickMapText").show();
                $("#clickCodeText").hide();
                $("#codeToCopy").hide();
            });
            for (var i = 0, n = markerArray.length; i < n; ++i) {
                markerArray[i].setVisible(true);
            }
            for (var i = 0, n = markerArray.length; i < n; ++i) {
                markerArray[i].setVisible(true);
            }
            markerCluster = new MarkerClusterer(map, markerArray, {
                zoomOnClick: false,
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
            google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
                clusterClicked = true;
                infoWindow.setContent("<div class=\"clusterDiv\"><div class=\"infoDiv infoDivCluster\"><div class=\"imageDiv\"><img class=\"postImg\"></div><div class=\"textDiv\"><h2 class=\"postTitle\"></h2><p class=\"postDescription\"></p></div></div><div class=\"infoDiv infoDivCluster\"><div class=\"imageDiv\"><img class=\"postImg\"></div><div class=\"textDiv\"><h2 class=\"postTitle\"></h2><p class=\"postDescription\"></p></div></div></div>");
                infoWindow.setPosition(cluster.getCenter());

                infoWindow.open(map);
                /*markerLatLng = cluster.getCenter();
                    map.panTo({lat: (markerLatLng.lat()), lng: markerLatLng.lng()});*/
                var markers = cluster.getMarkers();
                var markerTitles = [];

                for (i = 0; i < markers.length; i++) {
                    markerTitles.push(markers[i].getTitle());
                }
                //SEND THIS TO PHP AND GET DATA FROM MARKERS WITH THIS TITLE
                $.post('PHP/cluster.php', {
                    markerTitles: markerTitles
                }, function (data) {
                    //alert(data);
                    infoWindow.setContent(data);
                    /*infoWindow.setPosition(cluster.getCenter());
                        
                    infoWindow.open(map);*/
                }).done(function () {
                    $(".postImg").each(function () {
                        var attr = $(this).attr('src');
                        if ($(this).visible(true) && (attr == undefined || attr == false)) {
                            var imageSrc = $(this).data('src');
                            $(this).attr('src', imageSrc);
                            $(this).on('load', function () {
                                $(this).parent().css('background', 'transparent');
                                $(this).fadeTo(500, 1);
                            });
                            $(this).on('error', function () {
                                $(this).parent().css('background', 'transparent');
                                $(this).attr("src", "IMG/imageNotFound.png");
                                $(this).addClass("noImage");
                            });
                        }
                    });
                    var imageLoad;
                    $(".clusterDiv").bind('scroll', function () {
                        clearTimeout(imageLoad);
                        imageLoad = setTimeout(function () {
                            $(".postImg").each(function () {
                                var attr = $(this).attr('src');
                                if ($(this).visible(true) && (attr == undefined || attr == false)) {
                                    var imageSrc = $(this).data('src');
                                    $(this).attr('src', imageSrc);
                                    $(this).on('load', function () {
                                        $(this).parent().css('background', 'transparent');
                                        $(this).fadeTo(500, 1);
                                    });
                                    $(this).on('error', function () {
                                        $(this).parent().css('background', 'transparent');
                                        $(this).attr("src", "IMG/imageNotFound.png");
                                        $(this).addClass("noImage");
                                    });
                                }
                            });
                        }, 200);
                    });
                });
            });
            $("#howTo").stop().fadeOut(300, function () {
                $("#howTo").stop().fadeIn(300);
                $("#advancedSearch").stop().fadeIn(300);
                $("#clearSearch").stop().fadeIn(300);
            });

            codeMarker.setMap(null);
            google.maps.event.removeListener(theClickEvent);
        }
    });

    searchAll();
}

$(document).ready(function () {

    $("#pac-input").bind("input propertychange", function (evt) {
        // If it's the propertychange event, make sure it's the value that changed.
        if (window.event && event.type == "propertychange" && event.propertyName != "value")
            return;

        // Clear any previously set timer before setting a fresh one
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            if ($("#pac-input").val() == "") {
                map.setZoom(3);
                map.setCenter({
                    lat: 17,
                    lng: 0
                });
            };
        }, 800));
    });

    $(".howToHeader").click(function () {
        $(".howToText").stop().slideUp();
        $(this).next($(".howToText")).stop().slideToggle();
    });

    $("#codeToCopy").click(function () {
        var worldmapCode = $(this).text();
        copyToClipboard(worldmapCode);
        $("#clickCodeText").hide();
        $('#goodCopy').css("visibility", "hidden");
        $("#goodCopy").show();
        setTimeout(function () {
            $('#goodCopy').css("visibility", "visible");
        }, 100);
    });

    $("#mapCode").click(function () {
        var mapCode = $(this).text();
        copyToClipboard(mapCode);
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('#searchTerms').length && !$(event.target).closest('#advancedSearch').length && !$(event.target).closest('#clearSearch').length && !$(event.target).closest('#howTo').length && !$(event.target).closest('#howToPopup').length) {
            // Hide the menus.
            if ($("#searchTerms").is(':visible')) {
                $("#searchTerms").fadeOut(300);
            }
            if ($("#howToPopup").is(':visible') && !$(event.target).closest('.onoffswitch').length) {
                $("#howToPopup").fadeOut(300);
            }
        }
    });

    $("#advancedSearch").click(function () {
        $("#howToPopup").hide();
        $("#searchTerms").stop().fadeToggle(300);
    });
    $("#howTo").click(function () {
        $("#searchTerms").hide();
        $("#howToPopup").stop().fadeToggle(300);
    });
    var timerForClear;
    $("#clearSearch").click(function () {
        clearTimeout(timerForClear);
        timerForClear = setTimeout(function () {
            $('#fromDate').data('dateRangePicker').clear();
            $('#editorsChoice').prop("checked", false);
            $('#searchTerms *').filter(':input').each(function () {
                $(this).val('');
            });
            $('#editorsChoice').val("1");
            $("#postName").val('');
            $('#pac-input').val('');
            map.setZoom(3);
            map.setCenter({
                lat: 17,
                lng: 0
            });
            searchAll();
        }, 300)
    });
    $("#fromDate").dateRangePicker({
        inline: true,
        container: '#dateRangeDiv',
        alwaysOpen: true,
        language: 'en',
        showShortcuts: true,
        customShortcuts: [
            {
                name: 'week',
                dates: function () {
                    var start = moment(new Date()).toDate();
                    var end = moment(new Date()).subtract(1, 'weeks').toDate();
                    return [start, end];
                }
            },
            {
                name: 'month',
                dates: function () {
                    var start = moment(new Date()).toDate();
                    var end = moment(new Date()).subtract(1, 'months').toDate();
                    return [start, end];
                }
            },
            {
                name: 'year',
                dates: function () {
                    var start = moment(new Date()).toDate();
                    var end = moment(new Date()).subtract(1, 'years').toDate();
                    return [start, end];
                }
            },
            {
                name: 'three years',
                dates: function () {
                    var start = moment(new Date()).toDate();
                    var end = moment(new Date()).subtract(3, 'years').toDate();
                    return [start, end];
                }
            }
        ],
        customTopBar: 'Date range',
        monthSelect: true,
        yearSelect: true
    });
    $(".month1").on('click', function () {
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            $("#postName").val('');
            searchAll();
        }, 800));
    });
    $(".month2").on('click', function () {
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            $("#postName").val('');
            searchAll();
        }, 800));
    });
    $(".custom-shortcut").on('click', function () {
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            $("#postName").val('');
            searchAll();
        }, 800));
    });
    var timer;
    $('#bcImg').click(function () {
        timer = clearTimeout(timer);
        var textToCopy = "1FzNF3rxBp6HsJuuTF7swHi23hyjXmqwGc";
        copyToClipboard(textToCopy);
        $('#copiedMessage').slideUp(function () {
            $('#copiedMessage').html("");
            $('#copiedMessage').html("COPIED:&nbsp;&nbsp;&nbsp;" + textToCopy);
        });
        $('#copiedMessage').slideDown();
        timer = setTimeout(function () {
            $('#copiedMessage').slideUp();
        }, 3000);
    });
    $('#ethImg').click(function () {
        timer = clearTimeout(timer);
        var textToCopy = "0x86f341c3cc82e5bb0cfb8424d43abb2507e1ec06";
        copyToClipboard(textToCopy);
        $('#copiedMessage').slideUp(function () {
            $('#copiedMessage').html("");
            $('#copiedMessage').html("COPIED:&nbsp;&nbsp;&nbsp;" + textToCopy);
        });
        $('#copiedMessage').slideDown()
        timer = setTimeout(function () {
            $('#copiedMessage').slideUp();
        }, 3000);
    });
    /*$('#steemImg').click(function () {
        timer = clearTimeout(timer);
        var textToCopy = "steemitworldmap";
        copyToClipboard(textToCopy);
        $('#copiedMessage').slideUp(function () {
            $('#copiedMessage').html("");
            $('#copiedMessage').html("CLIPBOARD:&nbsp;&nbsp;&nbsp;" + textToCopy);
        });
        $('#copiedMessage').slideDown();
        timer = setTimeout(function () {
            $('#copiedMessage').slideUp();
        }, 3000);
    });*/
    $("#authorInput").on('keydown', function (e) {
        if (e.which == 13 || e.which == 10) {
            e.preventDefault();
            $("#authorInput").blur();
        }
    });
    $("#author").bind("input propertychange", function (evt) {
        // If it's the propertychange event, make sure it's the value that changed.
        if (window.event && event.type == "propertychange" && event.propertyName != "value")
            return;

        // Clear any previously set timer before setting a fresh one
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            $("#postName").val('');
            searchAll();
        }, 800));
    });
    $("#tag").bind("input propertychange", function (evt) {
        // If it's the propertychange event, make sure it's the value that changed.
        if (window.event && event.type == "propertychange" && event.propertyName != "value")
            return;

        // Clear any previously set timer before setting a fresh one
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            $("#postName").val('');
            searchAll();
        }, 800));
    });
    $("#fromDate").bind("input propertychange change", function (evt) {
        // If it's the propertychange event, make sure it's the value that changed.
        if (window.event && event.type == "propertychange" && event.propertyName != "value")
            return;

        // Clear any previously set timer before setting a fresh one
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            $("#postName").val('');
            searchAll();
        }, 800));
    });
    $("#editorsChoice").bind("input propertychange change", function (evt) {
        // If it's the propertychange event, make sure it's the value that changed.
        if (window.event && event.type == "propertychange" && event.propertyName != "value")
            return;

        // Clear any previously set timer before setting a fresh one
        window.clearTimeout($(this).data("timeout"));
        $(this).data("timeout", setTimeout(function () {
            // Do your thing here
            $("#postName").val('');
            searchAll();
        }, 200));
    });
});

! function (t) {
    var i = t(window);
    t.fn.visible = function (t, e, o) {
        if (!(this.length < 1)) {
            var r = this.length > 1 ? this.eq(0) : this,
                n = r.get(0),
                f = i.width(),
                h = i.height(),
                o = o ? o : "both",
                l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
            if ("function" == typeof n.getBoundingClientRect) {
                var g = n.getBoundingClientRect(),
                    u = g.top >= 0 && g.top < h,
                    s = g.bottom > 0 && g.bottom <= h,
                    c = g.left >= 0 && g.left < f,
                    a = g.right > 0 && g.right <= f,
                    v = t ? u || s : u && s,
                    b = t ? c || a : c && a;
                if ("both" === o) return l && v && b;
                if ("vertical" === o) return l && v;
                if ("horizontal" === o) return l && b
            } else {
                var d = i.scrollTop(),
                    p = d + h,
                    w = i.scrollLeft(),
                    m = w + f,
                    y = r.offset(),
                    z = y.top,
                    B = z + r.height(),
                    C = y.left,
                    R = C + r.width(),
                    j = t === !0 ? B : z,
                    q = t === !0 ? z : B,
                    H = t === !0 ? R : C,
                    L = t === !0 ? C : R;
                if ("both" === o) return !!l && p >= q && j >= d && m >= L && H >= w;
                if ("vertical" === o) return !!l && p >= q && j >= d;
                if ("horizontal" === o) return !!l && m >= L && H >= w
            }
        }
    }
}(jQuery);


function searchAll() {
    var j = 0;
    infoWindow.close();
    var postToSearch = $("#postName").val();
    var authorToSearch = $("#author").val();
    var tagToSearch = $("#tag").val();
    var dateRangeToSearch = $("#fromDate").val();
    if ($("#editorsChoice").is(":checked")) {
        var editorsChoice = $("#editorsChoice").val();
    } else {
        var editorsChoice = "";
    }
    $.ajax({
        url: "PHP/search.php",
        type: "GET",
        data: {
            author: authorToSearch,
            post: postToSearch,
            tag: tagToSearch,
            dateRange: dateRangeToSearch,
            editorsChoice: editorsChoice
        },
        success: function (data) {
            for (var i = 0; i < markerArray.length; i++) {
                markerArray[i].setMap(null);
            }
            markerArray = [];

            if (markerCluster) {
                markerCluster.clearMarkers();
            }
            if (data == "nodata") {} else {
                var xml = $.parseXML(data); //data.responseXML;
                var markers = xml.documentElement.getElementsByTagName('marker');
                var firstLat;
                var firstLng;
                Array.prototype.forEach.call(markers, function (markerElem) {
                    j++;
                    var postLink = markerElem.getAttribute('postLink');
                    /*var steemName = markerElem.getAttribute('steemName');
                    var postTitle = markerElem.getAttribute('postTitle');
                    var postImageLink = markerElem.getAttribute('postImageLink');
                    var postUpvote = markerElem.getAttribute('postUpvote');
                    var postValue = markerElem.getAttribute('postValue');
                    var postDate = markerElem.getAttribute('postDate');
                    var postDescription = markerElem.getAttribute('postDescription');*/
                    var point = new google.maps.LatLng(
                        parseFloat(markerElem.getAttribute('lattitude')),
                        parseFloat(markerElem.getAttribute('longitude')));

                    if (j == 1) {
                        firstLat = parseFloat(markerElem.getAttribute('lattitude'));
                        firstLng = parseFloat(markerElem.getAttribute('longitude'));
                    }

                    /* var infowincontent = document.createElement('div');
                     infowincontent.className = "infoDiv";
                     var DOM_link = document.createElement("a");
                     DOM_link.href = postLink;
                     DOM_link.target = "blank";
                     var DOM_img = document.createElement("img");
                     DOM_img.src = postImageLink;
                     DOM_img.alt = "Steemit post image";
                     DOM_img.className = "postImg";
                     DOM_link.appendChild(DOM_img);
                     infowincontent.appendChild(DOM_link);

                     var DOM_textDiv = document.createElement("div");
                     DOM_textDiv.className = "textDiv";

                     var DOM_title = document.createElement("h2");
                     DOM_title.className = "postTitle";
                     var DOM_titleLink = document.createElement("a");
                     DOM_titleLink.href = postLink;
                     DOM_titleLink.target = "blank";
                     var titleText = document.createTextNode(postTitle);
                     DOM_titleLink.appendChild(titleText);
                     DOM_title.appendChild(DOM_titleLink);
                     DOM_textDiv.appendChild(DOM_title);

                     var DOM_description = document.createElement("p");
                     DOM_description.className = "postDescription";
                     var descriptionText = document.createTextNode(postDescription);
                     DOM_description.appendChild(descriptionText);
                     DOM_textDiv.appendChild(DOM_description);

                     var DOM_extraInfo1 = document.createElement("p");
                     DOM_extraInfo1.className = "extraInfo1";
                     var steemNameText = document.createTextNode(steemName + "\u00A0\u00A0\u00A0\u00A0");
                     DOM_extraInfo1.appendChild(steemNameText);
                     DOM_textDiv.appendChild(DOM_extraInfo1);

                     var DOM_extraInfo = document.createElement("p");
                     DOM_extraInfo.className = "extraInfo";
                     var upvotesText = document.createTextNode("\u25B4" + postUpvote + "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
                     var valueText = document.createTextNode("$" + postValue + "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
                     var dateText = document.createTextNode(postDate);
                     DOM_extraInfo.appendChild(upvotesText);
                     DOM_extraInfo.appendChild(valueText);
                     DOM_extraInfo.appendChild(dateText);
                     DOM_textDiv.appendChild(DOM_extraInfo);

                     infowincontent.appendChild(DOM_textDiv);*/

                    var marker = new google.maps.Marker({
                        map: map,
                        position: point,
                        title: postLink
                    });
                    marker.addListener('click', function () {
                        $.ajax({
                            url: "PHP/markerInfo.php",
                            type: "GET",
                            data: {
                                postLink: marker.getTitle()
                            },
                            success: function (data) {
                                var infowincontent = data;
                                infoWindow.setContent(infowincontent);
                                infoWindow.open(map, marker);
                            },
                            complete: function (data) {
                                $(".postImg").on('load', function () {
                                    $(this).parent().css('background', 'transparent');
                                    $(this).fadeTo(500, 1);
                                });
                                $(".postImg").on('error', function () {
                                    $(this).parent().css('background', 'transparent');
                                    $(this).attr("src", "IMG/imageNotFound.png");
                                    $(this).addClass("noImage");
                                    $(this).fadeTo(500, 1);
                                });
                            }
                        });
                    });
                    markerArray.push(marker);
                });
                if (j == 1) {
                    map.setCenter({
                        lat: firstLat,
                        lng: firstLng
                    });
                }
                markerCluster = new MarkerClusterer(map, markerArray, {
                    zoomOnClick: false,
                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                });
                google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
                    clusterClicked = true;
                    infoWindow.setContent("<div class=\"clusterDiv\"><div class=\"infoDiv infoDivCluster\"><div class=\"imageDiv\"><img class=\"postImg\"></div><div class=\"textDiv\"><h2 class=\"postTitle\"></h2><p class=\"postDescription\"></p></div></div><div class=\"infoDiv infoDivCluster\"><div class=\"imageDiv\"><img class=\"postImg\"></div><div class=\"textDiv\"><h2 class=\"postTitle\"></h2><p class=\"postDescription\"></p></div></div></div>");
                    infoWindow.setPosition(cluster.getCenter());

                    infoWindow.open(map);
                    /*markerLatLng = cluster.getCenter();
                        map.panTo({lat: (markerLatLng.lat()), lng: markerLatLng.lng()});*/
                    var markers = cluster.getMarkers();
                    var markerTitles = [];

                    for (i = 0; i < markers.length; i++) {
                        markerTitles.push(markers[i].getTitle());
                    }
                    //SEND THIS TO PHP AND GET DATA FROM MARKERS WITH THIS TITLE
                    $.post('PHP/cluster.php', {
                        markerTitles: markerTitles
                    }, function (data) {
                        //alert(data);
                        infoWindow.setContent(data);
                        /*infoWindow.setPosition(cluster.getCenter());
                        
                        infoWindow.open(map);*/
                    }).done(function () {
                        $(".postImg").each(function () {
                            var attr = $(this).attr('src');
                            if ($(this).visible(true) && (attr == undefined || attr == false)) {
                                var imageSrc = $(this).data('src');
                                $(this).attr('src', imageSrc);
                                $(this).on('load', function () {
                                    $(this).parent().css('background', 'transparent');
                                    $(this).fadeTo(500, 1);
                                });
                                $(this).on('error', function () {
                                    $(this).parent().css('background', 'transparent');
                                    $(this).attr("src", "IMG/imageNotFound.png");
                                    $(this).addClass("noImage");
                                });
                            }
                        });
                        var imageLoad;
                        $(".clusterDiv").bind('scroll', function () {
                            clearTimeout(imageLoad);
                            imageLoad = setTimeout(function () {
                                $(".postImg").each(function () {
                                    var attr = $(this).attr('src');
                                    if ($(this).visible(true) && (attr == undefined || attr == false)) {
                                        var imageSrc = $(this).data('src');
                                        $(this).attr('src', imageSrc);
                                        $(this).on('load', function () {
                                            $(this).parent().css('background', 'transparent');
                                            $(this).fadeTo(500, 1);
                                        });
                                        $(this).on('error', function () {
                                            $(this).parent().css('background', 'transparent');
                                            $(this).attr("src", "IMG/imageNotFound.png");
                                            $(this).addClass("noImage");
                                        });
                                    }
                                });
                            }, 200);
                        });
                    });
                });
            }
        }
    })
}

function copyToClipboard(textToCopy) {
    var aux = document.createElement("input");
    aux.setAttribute("value", textToCopy);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function downloadUrl(url, callback) {
    var request = window.ActiveXObject ?
        new ActiveXObject('Microsoft.XMLHTTP') :
        new XMLHttpRequest;

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
        }
    };

    request.open('GET', url, true);
    request.send(null);
}

function doNothing() {}
