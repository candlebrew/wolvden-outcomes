function calculateCombos() {

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
        cool = 1.0
        warm = 0.0
        muted = 0.0
        mono = 0.0
    // COOL + WARM
    } else if (mCol == 1 && fCol == 4 || mCol == 4 && fCol == 1) {
        cool = 0.3
        warm = 0.3
        muted = 0.3
        mono = 0.1
    // COOL + MUTED
    } else if (mCol == 1 && fCol == 2 || mCol == 2 && fCol == 1) {
        cool = 0.5
        warm = 0.0
        muted = 0.45
        mono = 0.05
    // COOL + MONO
    } else if (mCol == 1 && fCol == 3 || mCol == 3 && fCol == 1) {
        cool = 0.5
        warm = 0.0
        muted = 0.0
        mono = 0.5
    // WARM + WARM
    } else if (mCol == 4 && fCol == 4) {
        cool = 0.0
        warm = 1.0
        muted = 0.0
        mono = 0.0
    // MUTED + WARM
    } else if (mCol == 4 && fCol == 2 || mCol == 2 && fCol == 4) {
        cool = 0.0
        warm = 0.45
        muted = 0.45
        mono = 1.0
    // MONO + WARM
    } else if (mCol == 4 && fCol == 3 || mCol == 3 && fCol == 4) {
        cool = 0.0
        warm = 0.33
        muted = 0.33
        mono = 0.33
    // MUTED + MUTED
    } else if (mCol == 2 && fCol == 2) {
        cool = 0.1
        warm = 0.1
        muted = 0.7
        mono = 0.1
    // MONO + MUTED
    } else if (mCol == 2 && fCol == 3 || mCol == 3 && fCol == 2) {
        cool = 0.0
        warm = 0.0
        muted = 0.5
        mono = 0.5
    // MONO + MONO
    } else if (mCol == 3 && fCol == 3) {
        cool = 0.0
        warm = 0.0
        muted = 0.0
        mono = 1.0
    } else if (mCol == 0 || fCol == 0) {
        window.alert("Please select a color for both parents in the dropdowns.");
    } else {
        window.alert("Line 93 -- Color combination error. Please alert the dev with this error code.");
    }

    // SHADES ------------------------
    // LIGHT + LIGHT
    if (mSh == 1 && fSh == 1) {
        light = 1.0
        medium = 0
        dark = 0
    // LIGHT + MEDIUM
    } else if (mSh == 1 && fSh == 2 || mSh == 2 && fSh == 1) {
        light = 0.50
        medium = 0.50
        dark = 0.0
    // LIGHT + DARK
    } else if (mSh == 1 && fSh == 3 || mSh == 3 && fSh == 1) {
        light = 0.25
        medium = 0.50
        dark = 0.25
    // MEDIUM + MEDIUM
    } else if (mSh == 2 && fSh == 2) {
        light = 0.25
        medium = 0.50
        dark = 0.25
    // MEDIUM + DARK
    } else if (mSh == 3 && fSh == 2 || mSh == 2 && fSh == 3) {
        light = 0.0
        medium = 0.50
        dark = 0.50
    // DARK + DARK
    } else if (mSh == 3 && fSh == 3) {
        light = 0.0
        medium = 0.0
        dark = 1.0
    } else if (mSh == 0 || fSh == 0) {
        window.alert("Please select a shade for both parents in the dropdowns.");
    } else {
        window.alert("Line 129 -- Shade combination error. Please alert the dev with this error code.");
    }

    // RARITIES ----------------------
    // I + I
    if (mRar == 1 && fRar == 1) {
        rarityI = 1.00
        rarityII = 0.0
        rarityIII = 0.0
    // I + II
    } else if (mRar == 1 && fRar == 2 || mRar == 2 && fRar == 1) {
        rarityI = 0.90
        rarityII = 0.10
        rarityIII = 0.0
    // I + III
    } else if (mRar == 1 && fRar == 3 || mRar == 3 && fRar == 1) {
        rarityI = 0.74
        rarityII = 0.25
        rarityIII = 0.1
    // II + II
    } else if (mRar == 2 && fRar == 2) {
        rarityI = 0.60
        rarityII = 0.40
        rarityIII = 0.0
    // II + III
    } else if (mRar == 2 && fRar == 3 || mRar == 3 && fRar == 2) {
        rarityI = 0.48
        rarityII = 0.50
        rarityIII = 0.2
    // III + III
    } else if (mRar == 3 && fRar == 3) {
        rarityI = 0.50
        rarityII = 0.40
        rarityIII = 0.10
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
            geneBoosting = 0.25
        // Rarity one step apart
        } else if (rarDif == -1 || rarDif == 1) {
            geneBoosting = 0.05
        // Rarity far apart
        } else if (rarDif == -2 || rarDif == 2) {
            geneBoosting = 0.005
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
    
    editComboText(cool, muted, mono, warm, light, medium, dark, rarityI, rarityII, rarityIII)
    
}