// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];
window.onload = function() {

    // Fruits

    var fruitList = document.createElement("ol");                   // Create unordered list
    document.getElementById("fruit").appendChild(fruitList);        // Add the unordered list to div that matches the ID

    var leng = fruits.length;

    for (var i = 0; i < leng; i++) {

        var li = document.createElement('li');      // Create an empty item
        li.innerHTML = fruits[i];                   // Append the first element of the array to an empty item
        fruitList.appendChild(li);                  // Place the item inside a container

    }

    // DIRECTORY

    var dirList = document.createElement('ul');

    directory.forEach(function(dir) {

        var item = document.createElement('li');
        item.innerHTML = dir.name;
        dirList.appendChild(item);
    
        if (dir.type === "directory") {
            var ul = document.createElement('ul');
            dir.files.forEach(function(fname) {
                var item2 = document.createElement('li');
                item2.innerHTML = fname.name;
                ul.appendChild(item2);
            });
            item.appendChild(ul);
        }
    });
    document.getElementById('directory').appendChild(dirList);

}