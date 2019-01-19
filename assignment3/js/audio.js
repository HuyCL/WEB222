// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function() {

    var audioDiv = document.getElementById('audio');    // Find container in HTML file that matches the ID
    var audString = "<audio controls='" + audio.controls + "'>";      // Holds audio tag and its attribute(s)
    var audString2 = "";    // Holds source tag
    var string;     // Empty string that will hold the concatenation between strings

    audio.source.forEach(function(s) {

        audString2 += "<source src='" + s.src + "' type='" + s.type + "'>";
    });

    string = audString + audString2 + "</audio>";    // Concatenate strings and a closing tag into a single string
    audioDiv.innerHTML += string;    // Append the string to HTML container
};