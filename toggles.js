function toggleBases() {
    var basesList = document.getElementById("basesList");
    var genesList = document.getElementById("genesList");
    var combosList = document.getElementById("combosList");
    
    // Show bases div and hide the others, if they are showing
    if (basesList.style.display === "none") {
        basesList.style.display = "block";
    }
    if (genesList.style.display === "block") {
        genesList.style.display = "none";
    }
    if (combosList.style.display === "block") {
        combosList.style.display = "none";
    }
    
    calculateBases()
}

function toggleGenes() {
    var basesList = document.getElementById("basesList");
    var genesList = document.getElementById("genesList");
    var combosList = document.getElementById("combosList");
    
    // Show bases div and hide the others, if they are showing
    if (genesList.style.display === "none") {
        genesList.style.display = "block";
    }
    if (basesList.style.display === "block") {
        basesList.style.display = "none";
    }
    if (combosList.style.display === "block") {
        combosList.style.display = "none";
    }
    
    calculateGenes()
}

function toggleCombos() {
    var basesList = document.getElementById("basesList");
    var genesList = document.getElementById("genesList");
    var combosList = document.getElementById("combosList");
    
    // Show bases div and hide the others, if they are showing
    if (combosList.style.display === "none") {
        combosList.style.display = "block";
    }
    if (basesList.style.display === "block") {
        basesList.style.display = "none";
    }
    if (genesList.style.display === "block") {
        genesList.style.display = "none";
    }
    
    calculateCombos()
}