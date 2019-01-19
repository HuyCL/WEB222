// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};

window.onload = function() {

    var vidDiv = document.getElementById('video');
    var vidString = "<video width='" + video.width + "' height='" + video.height + "' controls>"; // Variable holding video tag and its attributes
    var vidString2 = "";        // Variable for holding source tag
    var string;     // Empty string that will hold the concatenation between strings

    video.source.forEach(function(s) {

        vidString2 += "<source src='" + s.src + "' type='" + s.type + "'>";
    });


    string = vidString + vidString2 + "</video>";  // Concatenate two strings and closing tag into a single string
    vidDiv.innerHTML += string;       // Add string to HTML container
};

