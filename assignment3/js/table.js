// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];
window.onload = function() {

    // Create & Append Attributes to the Table
    var div = document.getElementById('contact');
    var table = document.createElement('table');
    table.style.border = "1px solid";
    table.border = "1";


    // Add Table to HTML Container
    var caption = document.createElement('caption');
    caption = "Contact";
    div.appendChild(table);


    // Insert Table Column Header
    var columnHeader = ["First Name", "Last Name", "Age", "Email"];
    var row = document.createElement('tr');     // Table row to hold table column header

    columnHeader.forEach(function(header) {
        var th = document.createElement('th');  // Hold an element in the array
        th.innerHTML = header;
        row.appendChild(th);     // Add 'th' element to 'tr' element
    });

    table.appendChild(row);


    // Concatenate Data Into A Single String
    var rowData = "<caption>" + "<b>" +"Contact" + "</b>" + "</caption>";

    users.forEach(function(info) {
        rowData += "<tr>" + "<td>" + info.first_name + "</td>" +
                            "<td>" + info.last_name + "</td>" +  
                            "<td>" + info.age + "</td>" +
                            "<td>" + '<a href="mailto:someone@example.com?Subject=Hello%20again">' + info.email + "</a>" + "</td>" +
                    "</tr>";

    });
    table.innerHTML += rowData; // Append string to HTML file
    
}