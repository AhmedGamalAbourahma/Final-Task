var darkMode = document.getElementById('circle'),
    myHeader = document.getElementById('head'),
    myParagraph = document.getElementById('para'),
    myNav = document.querySelector('nav'),
    myBody = document.getElementById('bod'),
    myHeaderAga = document.getElementById('headaga'),
    myParagraphAga = document.getElementById('paraaga');
darkMode.onclick = function myDarkMode() {
    'use strict';
    myHeader.style.color = "#80ac7b";
    myParagraph.style.color = "#80ac7b";
    darkMode.style.backgroundColor = 'white';
    myBody.style.backgroundColor = '#373331';
    myHeaderAga.style.color = "#80ac7b";
    myParagraphAga.style.color = "#80ac7b";
};
darkMode.ondblclick = function myLightMode() {
    'use strict';
    myHeader.style.color = "#f5564e";
    myParagraph.style.color = "#f5564e";
    darkMode.style.backgroundColor = 'black';
    myBody.style.backgroundColor = '#fab95b';
    myHeaderAga.style.color = "#f5564e";
    myParagraphAga.style.color = "#f5564e";
};