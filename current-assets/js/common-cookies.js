/*FUNCTION TO CREATE COOKIE*/
function createCookie(cookiname, cookivalue, timeinminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (timeinminutes * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cookiname + "=" + cookivalue + ";" + expires + ";path=/";
}

/*FUNCTION TO CREATE SESSION COOKIE*/
function createSessionCookie(cookiname, cookivalue) {
    document.cookie = cookiname + "=" + cookivalue + ";" + "path=/";
}

/*FUNCTION TO READ COOKIE VALUE BY NAME */
function readCookie(cookiname) {
    var name = cookiname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*FUNCTION TO DELETE  COOKIE BY NAME*/
function deleteCookie(cookiname) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires=" + d;
    var value = "";
    document.cookie = cookiname + "=" + value + expires + "; path=/";
}

/*FUNCTION TO DELETE ALL CREATED COOKIES*/
function deleteAllCookie() {
    var arrCookies = document.cookie.split(";");
    for (var i = 0; i < arrCookies.length; i++) {
        var c = arrCookies[i].split("=");
        deleteCookie(c[0]); /*Calling the below delete function*/
    }
}


/*FUNCTION TO DELETE DO COOKIE BY NAME AND DOMAIN*/
function deleteCookieByNameAndDomain(cookiname, domainname) {

    document.cookie = cookiname + '=; path=/; domain=' + domainname + '; expires=' + new Date(0).toUTCString();
}