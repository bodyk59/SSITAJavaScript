// Task01 
// Create a function that makes Ajax request to URL passed as parameter
// Server returns data in JSON format, ready property "name" of data file
// and write it to span with ID "target" of a document "target.html"
// Note: function may use jQuery

// Arguments:
// Function accepts one argument, a string with URL to request

// Return result:
// Function should not return any data, it should write to span element 
// with ID "target"

function m10task01(targetURL) {
    //1. Using JavaScript to make Ajax Requests:

    // function getXHR() {
    //     var xhr;
    //     if (window.XMLHttpRequest){
    //         xhr = new XMLHttpRequest();
    //     } else{
    //         xhr = new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     return xhr;
    // }
    //
    // var xhr = getXHR();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200){
    //         var clientData = JSON.parse(xhr.responseText);
    //         document.getElementById("target").innerHTML = clientData.name;
    //     }
    // };
    //
    // xhr.open("GET", targetURL, true);
    // xhr.send();


    // 2. Using jQuery to make Ajax Requests:

    $.ajax({
        type: 'GET',
        url: targetURL,
        dataType: 'json',
        success: function (data) {
            $('#target').html(data.name);
        }
    })
}