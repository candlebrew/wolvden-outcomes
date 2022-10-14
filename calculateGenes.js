function calculateGenes() {
    
    // retrieve text div IDs
    var geneCool = document.getElementById("geneCool");
    var geneWarm = document.getElementById("geneWarm");
    var geneMono = document.getElementById("geneMono");
    var geneMuted = document.getElementById("geneMuted");
    var geneLight = document.getElementById("geneLight");
    var geneMed = document.getElementById("geneMed");
    var geneDark = document.getElementById("geneDark");
    var geneOne = document.getElementById("geneOne");
    var geneTwo = document.getElementById("geneTwo");
    var geneThree = document.getElementById("geneThree");
    var geneBoost = document.getElementById("geneBoost");

    // retrieve gene IDs
    var mColor = document.getElementById("mColor");
    var fColor = document.getElementById("fColor");
    var mShade = document.getElementById("mShade");
    var fShade = document.getElementById("fShade");
    var mRarity = document.getElementById("mRarity");
    var fRarity = document.getElementById("fRarity");

    // retrieve gene values
    var mCol = mColor.options[mColor.selectedIndex].value;
    var fCol = fColor.options[fColor.selectedIndex].value;
    var mSh = mShade.options[mShade.selectedIndex].value;
    var fSh = fShade.options[fShade.selectedIndex].value;
    var mRar = mRarity.options[mRarity.selectedIndex].value;
    var fRar = fRarity.options[fRarity.selectedIndex].value;

    // define variables
    var cool = 0 // 1
    var muted = 0 // 2
    var mono = 0 // 3
    var warm = 0 // 4
    var light = 0 // 1
    var medium = 0 // 2
    var dark = 0 // 3
    var rarityI = 0 // 1
    var rarityII = 0 // 2
    var rarityIII = 0 // 3
    var rarDif = 0
    var geneBoosting = 0
    
    rarDif = mRar - fRar
    
    // COLORS ------------------------
    // COOL + COOL
    if (mCol == 1 && fCol == 1) {
        cool = 100
        warm = 0
        muted = 0
        mono = 0
    // COOL + WARM
    } else if (mCol == 1 && fCol == 4 || mCol == 4 && fCol == 1) {
        cool = 30
        warm = 30
        muted = 30
        mono = 10
    // COOL + MUTED
    } else if (mCol == 1 && fCol == 2 || mCol == 2 && fCol == 1) {
        cool = 50
        warm = 0
        muted = 45
        mono = 5
    // COOL + MONO
    } else if (mCol == 1 && fCol == 3 || mCol == 3 && fCol == 1) {
        cool = 50
        warm = 0
        muted = 0
        mono = 50
    // WARM + WARM
    } else if (mCol == 4 && fCol == 4) {
        cool = 0
        warm = 100
        muted = 0
        mono = 0
    // MUTED + WARM
    } else if (mCol == 4 && fCol == 2 || mCol == 2 && fCol == 4) {
        cool = 0
        warm = 45
        muted = 45
        mono = 100
    // MONO + WARM
    } else if (mCol == 4 && fCol == 3 || mCol == 3 && fCol == 4) {
        cool = 0
        warm = 33
        muted = 33
        mono = 33
    // MUTED + MUTED
    } else if (mCol == 2 && fCol == 2) {
        cool = 10
        warm = 10
        muted = 70
        mono = 10
    // MONO + MUTED
    } else if (mCol == 2 && fCol == 3 || mCol == 3 && fCol == 2) {
        cool = 0
        warm = 0
        muted = 50
        mono = 50
    // MONO + MONO
    } else if (mCol == 3 && fCol == 3) {
        cool = 0
        warm = 0
        muted = 0
        mono = 100
    } else if (mCol == 0 || fCol == 0) {
        window.alert("Please select a color for both parents in the dropdowns.");
    } else {
        window.alert("Line 93 -- Color combination error. Please alert the dev with this error code.");
    }

    // SHADES ------------------------
    // LIGHT + LIGHT
    if (mSh == 1 && fSh == 1) {
        light = 100
        medium = 0
        dark = 0
    // LIGHT + MEDIUM
    } else if (mSh == 1 && fSh == 2 || mSh == 2 && fSh == 1) {
        light = 50
        medium = 50
        dark = 0
    // LIGHT + DARK
    } else if (mSh == 1 && fSh == 3 || mSh == 3 && fSh == 1) {
        light = 25
        medium = 50
        dark = 25
    // MEDIUM + MEDIUM
    } else if (mSh == 2 && fSh == 2) {
        light = 25
        medium = 50
        dark = 25
    // MEDIUM + DARK
    } else if (mSh == 3 && fSh == 2 || mSh == 2 && fSh == 3) {
        light = 0
        medium = 50
        dark = 50
    // DARK + DARK
    } else if (mSh == 3 && fSh == 3) {
        light = 0
        medium = 0
        dark = 100
    } else if (mSh == 0 || fSh == 0) {
        window.alert("Please select a shade for both parents in the dropdowns.");
    } else {
        window.alert("Line 129 -- Shade combination error. Please alert the dev with this error code.");
    }

    // RARITIES ----------------------
    // I + I
    if (mRar == 1 && fRar == 1) {
        rarityI = 100
        rarityII = 0
        rarityIII = 0
    // I + II
    } else if (mRar == 1 && fRar == 2 || mRar == 2 && fRar == 1) {
        rarityI = 90
        rarityII = 10
        rarityIII = 0
    // I + III
    } else if (mRar == 1 && fRar == 3 || mRar == 3 && fRar == 1) {
        rarityI = 74
        rarityII = 25
        rarityIII = 1
    // II + II
    } else if (mRar == 2 && fRar == 2) {
        rarityI = 60
        rarityII = 40
        rarityIII = 0
    // II + III
    } else if (mRar == 2 && fRar == 3 || mRar == 3 && fRar == 2) {
        rarityI = 48
        rarityII = 50
        rarityIII = 2
    // III + III
    } else if (mRar == 3 && fRar == 3) {
        rarityI = 50
        rarityII = 40
        rarityIII = 10
    }  else if (mRar == 0 || fRar == 0) {
        window.alert("Please select a rarity for both parents in the dropdowns.");
    } else {
        window.alert("Line 165 -- Rarity combination error. Please alert the dev with this error code.");
    }
    
    // Receive same category boost?
    if (mCol == fCol && mSh == fSh) {
        // Check all genes have been selected
        if (mRar == 0 || fRar == 0 || mCol == 0 || fCol == 0 || mSh == 0 || fSh == 0) {
            geneBoosting = 0
        // Same rarity
        } else if (rarDif == 0) {
            geneBoosting = 25
        // Rarity one step apart
        } else if (rarDif == -1 || rarDif == 1) {
            geneBoosting = 5
        // Rarity far apart
        } else if (rarDif == -2 || rarDif == 2) {
            geneBoosting = 0.5
        }
        // ADJUST COLORS ---------
        // Adjust Cool
        if (mCol == 1) {
            cool = cool + geneBoosting
        // Adjust Muted
        } else if (mCol == 2) {
            muted = muted + geneBoosting
        // Adjust Mono
        } else if (mCol == 3) {
            mono = mono + geneBoosting
        // Adjust Warm
        } else if (mCol == 4) {
            warm = warm + geneBoosting
        }
        // ADJUST SHADES ---------
        // Adjust Light
        if (mSh == 1) {
            light = light + geneBoosting
        // Adjust Medium
        } else if (mSh == 2) {
            medium = medium + geneBoosting
        // Adjust Dark
        } else if (mSh == 3) {
            dark = dark + geneBoosting
        }
        // ADJUST SHADES ---------
        // Adjust I
        if (mRar == 1) {
            rarityI = rarityI + geneBoosting
        // Adjust II
        } else if (mRar == 2) {
            rarityII = rarityII + geneBoosting
        // Adjust III
        } else if (mRar == 3) {
            rarityIII = rarityIII + geneBoosting
        }
    }       
    
    geneCool.textContent = "Cool: " + cool + "%";
    geneWarm.textContent = "Warm: " + warm + "%";
    geneMono.textContent = "Monochrome: " + mono + "%";
    geneMuted.textContent = "Muted: " + muted + "%";
    
    geneLight.textContent = "Light: " + light + "%";
    geneMed.textContent = "Medium: " + medium + "%";
    geneDark.textContent = "Dark: " + dark + "%";
    
    geneOne.textContent = "I: " + rarityI + "%";
    geneTwo.textContent = "II: " + rarityII + "%";
    geneThree.textContent = "III: " + rarityIII + "%";
    
    geneBoost.textContent = "Gene Boost: " + geneBoosting + "%";
    
}