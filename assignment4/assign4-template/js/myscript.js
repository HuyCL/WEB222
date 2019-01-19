// All you JavaScript code for assignment 4 should be in this file
window.onload = function() {

    var title = document.getElementById('subtitle'); // Update title on click

    //----------------------------- Country List -----------------------------\\
    var country = document.getElementById('menu_1');
    country.onclick = function(e) {
        title.innerHTML = "List of Countries and Dependencies";
        displayTable("English");
        e.preventDefault(); // Stops the page from reverting to default page on click
    };
    
    //------------------------- Population Menu Items -------------------------\\
    var pop1 = document.getElementById('menu_21');
    pop1.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
        displayTable("pop1");
    };

    var pop2 = document.getElementById('menu_22');
    pop2.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
        displayTable("pop2");
    };

    //----------------------- Area& Continent Menu Items -----------------------\\
    var area1 = document.getElementById('menu_31');
    area1.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km<sup>2</sup>, Americas";
        displayTable("area1");
    };

    var area2 = document.getElementById('menu_32');
    area2.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies - All countries in Asia";
        displayTable("area2");
    };

    //-------------------------- Language Menu Items --------------------------\\

    var eng = document.getElementById('menu_41');
    eng.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies - Country/Dep. Name in English (English)";
        displayTable("English");
    };

    var ara = document.getElementById('menu_42');
    ara.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Arabic (عربى)";
        displayTable("Arabic");
    };

    var chi = document.getElementById('menu_43');
    chi.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Chinese (中文)";
        displayTable("Chinese");
    };

    var fre = document.getElementById('menu_44');
    fre.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in French (français)";
        displayTable("Franch");
    };

    var hin = document.getElementById('menu_45');
    hin.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Hindi (हिंदी)";
        displayTable("Hindi");
    };

    var kor = document.getElementById('menu_46');
    kor.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Korean (한국어)";
        displayTable("Korean");
    }; 

    var jap = document.getElementById('menu_47');
    jap.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Japanese (日本語)";
        displayTable("Japanese");
    };
    var rus = document.getElementById('menu_48');
    rus.onclick = function() {
        title.innerHTML = "List of Countries and Dependencies – Country/Dep. Name in Russian (русский)";
        displayTable("Russian");
    };

    // Get data from "countries" object and insert into td element
    function getData(data) {
        var td = document.createElement('td');
        var newText = document.createTextNode(data);
        td.appendChild(newText);
        return td;
    }

    // Get images from flags directory
    function getImage(code) {
        var td = document.createElement('td');
        var img = document.createElement('img');
        var ext = ".png";   // File extension
        var path = "flags/"; // Navigate to directory that contain images

        img.src = path + code + ext;
        td.appendChild(img);
        return td;
    }

    // Get collection of related data from "countries" object and insert into a single row(tr) element
    function getRowData(lng, index) {
        var tr = document.createElement('tr');

        tr.appendChild(getImage(countries[index].Code));
        tr.appendChild(getData(countries[index].Code));
        tr.appendChild(getData(countries[index].Name[lng]));
        tr.appendChild(getData(countries[index].Continent));
        tr.appendChild(getData(countries[index].AreaInKm2));
        tr.appendChild(getData(countries[index].Population));
        tr.appendChild(getData(countries[index].Capital));

        return tr;
    }

    // Create and populate tbody element
    function displayTable(request) {
        var outputTable = document.getElementById('outputTable');
        var tbody = document.createElement('tbody');
        var tbodyValidation = outputTable.querySelector('tbody');
        
        if (tbodyValidation) {     // If tbody element is found, remove it for new data
            outputTable.removeChild(tbodyValidation);
        }
        
        for (var i = 0; i < countries.length; i++) {
            
            if (request == "English") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "Arabic") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "Chinese") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "Franch") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "Hindi") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "Korean") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "Japanese") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "Russian") {
                tbody.appendChild(getRowData(request, i));
            }

            if (request == "pop1") {

                if (countries[i].Population > 100000000) {
                    tbody.appendChild(getRowData("English", i));
                }
            }

            if (request == "pop2") {
                
                if (countries[i].Population > 1000000 && countries[i].Population < 2000000) {
                    tbody.appendChild(getRowData("English", i));
                }
            }

            if (request == "area1") {

                if (countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas") {
                    tbody.appendChild(getRowData("English", i));
                }
            }

            if (request == "area2") {

                if (countries[i].Continent == "Asia") {
                    tbody.appendChild(getRowData("English", i));
                }
            }
        }

        outputTable.appendChild(tbody);
    }


};

