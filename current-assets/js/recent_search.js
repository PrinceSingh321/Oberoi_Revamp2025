$(function () {
    $('.autocomplete').autocomplete({
        lookup: products,
        onSelect: function (suggestion) {
            window.location.href = suggestion.url;
            $(".autocomplete-suggestion").html("<div class='avvv'>" + suggestion.value + "</div>");
            var recentSearchvalue = document.getElementById("desktopSearch").value;
            var oldCookievalue = readCookie("recentSearchkeyWordValue");
            createCookie("recentSearchkeyWordValue", suggestion.value, "365");
            var valueofCookie = readCookie("recentSearchkeyWordValue");
            if (valueofCookie != "" && oldCookievalue != suggestion.value) {
                createCookie("recentSearchkeyWordValue2", oldCookievalue, "365");
            }
           
            createCookie("recentSearchkeyWordUrl", suggestion.url, "365");
            var l = document.getElementById('viewallsearch');
            var uri = URI(l.href);
            var qs = uri.query(true);
            qs.q = recentSearchvalue
            uri.query(qs);
            l.href = uri;
            window.location = "/search/?q=" + document.getElementById("desktopSearch").value + "";
        }
    })//.trigger("focus");
})

$(document).ready(function () {
    $(".recentSearch ul").show();
    var recentSearchkeyWordValue = readCookie("recentSearchkeyWordValue");
    var recentSearchkeyWordValue2 = readCookie("recentSearchkeyWordValue2");
    var recentSearchkeyWordUrl = readCookie("recentSearchkeyWordUrl");
    if (recentSearchkeyWordValue != null && recentSearchkeyWordValue != "") {
        console.log("recentsearch-" + recentSearchkeyWordValue);
        var text = recentSearchkeyWordValue;
        var text2 = recentSearchkeyWordValue2;
        //var l = document.getElementById('viewallsearchResult');
        //var uri = URI(l.href);
        //var qs = uri.query(true);
        //qs.q = recentSearchkeyWordUrl.trim();
        //uri.query(qs);
       // l.href = uri;
       // $(".recentSearch li :nth-child(1) a").html(text);
        document.getElementById("viewallsearchResult").innerHTML = "<a> " + text + " </a>";
        $(".recentSearch").show();
        var l = document.getElementById('viewallsearchResult');
        var uri = URI(l.href);
        var qs = uri.query(true);
        qs.q = text
        uri.query(qs);
        l.href = uri;
        if (text2 != "") {
            document.getElementById("viewallsearchResult2").innerHTML = "<a> " + text2 +" </a>";
          //  $(".recentSearch ul li :nth-child(2)  a").html(text2);
            $(".recentSearch").show();
            var l2 = document.getElementById('viewallsearchResult2');
            var uri2 = URI(l.href);
            var qs2 = uri2.query(true);
            qs2.q = text2
            uri2.query(qs2);
            l2.href = uri2;
        }
    }
});

$("#desktopSearch").on("keyup", function (event) {
    var i = event.keyCode;

    if ((i >= 48 && i <= 57) || (i >= 96 && i <= 105)) {
        $("#arama").off("keyup");
        console.log("Number pressed. Stopping...");
       // window.location = "/search/?q=" + document.getElementById("desktopSearch").value + "";
    } else {
       // window.location = "/search/?q=" + document.getElementById("desktopSearch").value +"";
        console.log("Non-number pressed.");
        var l = document.getElementById('viewallsearch');
        var uri = URI(l.href);
        var qs = uri.query(true);
        qs.q = document.getElementById("desktopSearch").value;
        uri.query(qs);
        l.href = uri;
    }
});




