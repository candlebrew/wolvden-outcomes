function mutationCheck() {

    var melaCheck = document.getElementById("melaCheck").checked;
    var albinoCheck = document.getElementById("albinoCheck").checked;
    var offspringBase = document.getElementById("offspringBase");
    var offspringImport = document.getElementById("offspringImport");
    var importText = document.getElementById("importText");
    var finalText = importText.value;
    
    if (melaCheck == true) {
        if (albinoCheck == true) {
            window.alert("Please select only one mutation type.");
            }
        else {
            offspringBase.src = "melaref.png";
        }
    } else if (albinoCheck == true) {
        offspringBase.src = "albinoref.png";
    } else {
        window.alert("You must select which mutation you are checking for. Please select one of the checkboxes above.");
        }

    offspringImport.src = importText.value;
    
}
