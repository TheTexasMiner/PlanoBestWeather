function SetupProcuderes() {
    var cUrl = "http://api.ipstack.com/check?access_key=6c4cdf24dcf4b15ca4dfe32d52cf71b3";
    jQuery(document).ready(function ($) {
        $.ajax({
            url: cUrl,
            cache: false
        })
            .done(function (json) {
                callback: callback_SetupProcuderes(json);
            });
    });
}

function callback_SetupProcuderes(json) {
    var javaEnabled = true;
    var BrowserType = navigator.userAgent;

    if (((BrowserType.indexOf("MSIE") >= 0) && (BrowserType.indexOf("(compatible") >= 0))) {
        location.replace("http://www.PlanoBestWeather.com/htmlFiles/BrowserMessage.html");
    }
    if (BrowserType.indexOf("Firefox") >= 0) {
        location.replace("http://www.PlanoBestWeather.com/htmlFiles/BrowserMessage.html");
    }

    var fileName = "http://www.PlanoBestWeather.com/WxLibs/States.txt";
    var txtFile;
    if (window.XMLHttpRequest)
        txtFile = new XMLHttpRequest();
    else
        txtFile = new ActiveXObject("Microsoft.XMLHTTP");

    txtFile.open("GET", fileName, false);
    txtFile.send();
    var txtDoc = txtFile.responseText;
    var states = txtDoc.split("\n");

    var fileName2 = "http://www.PlanoBestWeather.com/WxLibs/IP.txt";
    var txtFile2;
    if (window.XMLHttpRequest)
        txtFile2 = new XMLHttpRequest();
    else
        txtFile2 = new ActiveXObject("Microsoft.XMLHTTP");

    txtFile2.open("GET", fileName2, false);
    txtFile2.send();
    var txtDoc2 = txtFile2.responseText;
    var IP = txtDoc2.split("\n");

    var fileName3 = "http://www.PlanoBestWeather.com/WxLibs/Country.txt";
    var txtFile3;
    if (window.XMLHttpRequest)
        txtFile3 = new XMLHttpRequest();
    else
        txtFile3 = new ActiveXObject("Microsoft.XMLHTTP");

    txtFile3.open("GET", fileName3, false);
    txtFile3.send();
    var txtDoc3 = txtFile3.responseText;
    var Country = txtDoc3.split("\n");


    if(json.country_name === null || json.country_name === " " || json.country_name === "")
        location.replace("http://www.PlanoBestWeather.com/htmlFiles/RestrictedStates.html");
    
    var found = 0;    
    for (var z = 0; z < Country.length; z++) {
        if (json.country_name.trim() === Country[z].trim()) {
            found = 1;
        }
    }
    if (found === 0) {
        location.replace("http://www.PlanoBestWeather.com/htmlFiles/RestrictedStates.html");
    }
    
    
    if(json.region_name === null || json.region_name === " " || json.region_name === "")
        location.replace("http://www.PlanoBestWeather.com/htmlFiles/RestrictedStates.html");
            
    for (var y = 0; y < states.length; y++) {
        if (json.region_name.trim() === states[y].trim())
            location.replace("http://www.PlanoBestWeather.com/htmlFiles/RestrictedStates.html");
    }
    
    
    if(json.ip === null || json.ip === " " || json.ip === "")
        location.replace("http://www.PlanoBestWeather.com/htmlFiles/Restricted.html");
            
    for (var x = 0; x < IP.length; x++) {
        if (json.ip.trim() === IP[x].trim())
            location.replace("http://www.PlanoBestWeather.com/htmlFiles/Restricted.html");
    }



}

function BrowserDetection() {
    var javaEnabled = true;
    var BrowserType = navigator.userAgent;

    if (((BrowserType.indexOf("MSIE") >= 0) && (BrowserType.indexOf("(compatible") >= 0))) {
        return false;
    }
    else if (((BrowserType.indexOf("Chrome") >= 0) && (BrowserType.indexOf("Edge") >= 0))) {
        return true;
    }
    else if (BrowserType.indexOf("Chrome") >= 0) {
        return true;
    }
    else if (BrowserType.indexOf("Firefox") >= 0) {
        return false;
    }
    else {
        return true;
    }
}

function CheckBrowsers() {
    SetupProcuderes();
    if (Number(window.screen.availWidth) >= Number("600")) {
        location.replace("http://www.PlanoBestWeather.com/Main.html");
    }
    else {
        location.replace("http://www.PlanoBestWeather.com/sMobil.html");
    }
}








