      var mac = document.getElementById("macParagraph");
      mac.style.display = "none";
      var chrome = document.getElementById("chromeParagraph");
      chrome.style.display = "none";
      var windows = document.getElementById("windowsParagraph");
      windows.style.display = "none";

function macFunction(){
        var intro = document.getElementById("macParagraph");
        mac.style.display = "block";
        var ovi = document.getElementById("chromeParagraph");
        chrome.style.display = "none";
        var mcDavid = document.getElementById("windowsParagraph");
        windows.style.display = "none";
}

function chromeFunction(){
        var intro = document.getElementById("macParagraph");
        mac.style.display = "none";
        var ovi = document.getElementById("chromeParagraph");
        chrome.style.display = "block";
        var mcDavid = document.getElementById("windowsParagraph");
        windows.style.display = "none";
}

function windowsFunction(){
        var intro = document.getElementById("macParagraph");
        mac.style.display = "none";
        var ovi = document.getElementById("chromeParagraph");
        chrome.style.display = "none";
        var mcDavid = document.getElementById("windowsParagraph");
        windows.style.display = "block";
}

