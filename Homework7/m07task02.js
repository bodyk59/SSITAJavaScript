// Task02
// Using JavaScript and DOM hide second and third paragraphs
// of target HTML document, all other elements should be visible

function m07task02() {
    var classes_list = document.getElementsByClassName("test");
    for (var i = 0; i < classes_list.length; i++){
        classes_list[i].style.visibility = 'hidden';
    }
}