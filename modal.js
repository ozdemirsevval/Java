function displayAlert()
{
    ///alert("Hello World! Gülümm :)");

    //Confirm Diyalog
    /*
    let result = confirm("Silmek istediğinizden Emin misiniz?");
    if (result) {
        alert("Silindi");
    }else{
        alert("Silme iptal edildi.")
    }; */

    //Prompt Diaolog Box

    var retVal = prompt("Enter your name: ", "your name here")
    let myDiv = document.getElementById("test");
    myDiv.innerHTML = retVal;

    function OpenModel(btn){
        alert(btn.getAttribute("id"));
    }
}